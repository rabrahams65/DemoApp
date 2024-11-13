namespace API.DTOs.UserAccount
{
    public record struct UserDto
    (
        string Id,
        string? Name,
        string? UserName,
        string Email
    );
}
