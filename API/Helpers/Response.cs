namespace API.Helpers
{
    public class Response
    {
        public bool Succeeded { get; set; }
        public string[]? Errors { get; set; }
        public string? Message { get; set; }
        public string? CreatedId { get; set; }
       
    }
}
