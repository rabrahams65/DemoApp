using API.Core.Domain;
using API.Core.Repositories;
using API.DTOs.UserAccount;
using API.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers.UserAccountEndPoints
{
    public class UserAccountController : BaseApiController
    {
        private readonly IAccountRepository _accountRepository;
        public UserAccountController(IAccountRepository accountRepository) 
        {
            _accountRepository = accountRepository;
        }

        [HttpPost]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [Route("login")]
        public async Task<ActionResult<TokenResult>> Login([FromBody] LoginDto loginDto)
        {
            var result = await _accountRepository.Login(loginDto);

            if (result.Token == null) return BadRequest(result);

            return Ok(result);
        }


        [HttpPost]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [Route("register")]
        public async Task<ActionResult<UserDto>> Register([FromBody] RegisterDto registerDto)
        {
            var result = await _accountRepository.RegisterUser(registerDto);

            if (!result.Succeeded) return BadRequest(result);

            return CreatedAtAction(nameof(GetUserByEmail), new { email = registerDto.EmailAddress }, result);
        }

        [HttpGet]
        [NonAction]
        public async Task<ActionResult<UserDto>> GetUserByEmail(string email)
        {
            var result = await _accountRepository.GeUserByEmail(email);
            if (result.Email == null) return NotFound();

            return Ok(result);
        }
    }
}
