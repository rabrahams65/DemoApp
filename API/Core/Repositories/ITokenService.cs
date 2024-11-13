using API.DTOs.UserAccount;
using API.Helpers;
using System.Security.Claims;

namespace API.Core.Repositories
{
    public interface ITokenService
    {
        TokenResult GetToken(List<Claim> authClaims, LoginDto loginDto);
    }
}
