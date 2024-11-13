using System.ComponentModel.DataAnnotations;

namespace API.DTOs.UserAccount
{
    public class LoginDto
    {
        [EmailAddress]
        public string? EmailAddress { get; set; }

        [DataType(DataType.Password)]
        public string? Password { get; set; }
    }
}
