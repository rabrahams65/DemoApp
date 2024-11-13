using API.DTOs.UserAccount;
using API.Helpers;

namespace API.Core.Repositories
{
    public interface IAccountRepository
    {
        Task<Response> RegisterUser(RegisterDto registerDto);
        Task<TokenResult> Login(LoginDto loginDto);
        Task<UserDto> GeUserByEmail(string email);
    }
}
