using API.Core.Domain;
using API.Core.Repositories;
using API.DTOs.UserAccount;
using API.Helpers;
using Microsoft.AspNetCore.Identity;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace API.Persistence.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly ITokenService _tokenService;

        public AccountRepository(UserManager<User> userManager, SignInManager<User> signInManager, ITokenService tokenService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
        }

        public async Task<UserDto> GeUserByEmail(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            return new UserDto { Id = user.Id, Email = email, Name = user.Name, UserName = user.UserName };
        }

        public async Task<TokenResult> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.EmailAddress);

            var signInResult = await _signInManager.PasswordSignInAsync(user, loginDto.Password, isPersistent: true, lockoutOnFailure: false);

            if (user != null && signInResult.Succeeded)
            {

                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                };

                return _tokenService.GetToken(authClaims, loginDto);

            }

            return new TokenResult { Error = "Email or Password incorrect, please try again" };
        }

        public async Task<Response> RegisterUser(RegisterDto registerDto)
        {

            var user = await _userManager.FindByEmailAsync(registerDto.EmailAddress);

            if(user is null)
            {
                var newUser = new User()
                {
                    Email = registerDto.EmailAddress,
                    SecurityStamp = Guid.NewGuid().ToString(),
                    UserName = registerDto.EmailAddress
                };

                var result = await _userManager.CreateAsync(newUser, registerDto.Password);

                if (result.Succeeded)
                {
                    return new Response { Succeeded = true, CreatedId = newUser.Id, Message = SuccessMessage.RegisteredSuccessfully(nameof(User)) };

                }

                return new Response { Succeeded = false, Errors = ErrorMessage.ErrorList(result.Errors) };
            }
            else 
                return new Response { Succeeded = false, Errors = new string[] { ErrorMessage.FailedToCreateEntity(nameof(User)), "There is already a user registered for this app." } };
 
        }

    }
}
