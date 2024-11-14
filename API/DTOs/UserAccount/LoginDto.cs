using System.ComponentModel.DataAnnotations;

namespace API.DTOs.UserAccount
{
    public class LoginDto
    {
        //[EmailAddress]
        [Required]
        public string? EmailAddress { get; set; }

        //[DataType(DataType.Password)]
        [Required]
        public string? Password { get; set; }
    }
}
