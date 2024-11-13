using Microsoft.AspNetCore.Identity;

namespace API.Core.Domain
{
    public class User : IdentityUser
    {
        public string? Name { get; set; }
    }
}
