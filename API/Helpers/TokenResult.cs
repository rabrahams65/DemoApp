namespace API.Helpers
{
    public class TokenResult
    {
        public string? Token { get; set; }
        public DateTime? Expiration { get; set; }
        public string? Error { get; set; }
    }
}
