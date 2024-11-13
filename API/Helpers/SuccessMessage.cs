namespace API.Helpers
{
    public static class SuccessMessage
    {
        public static string RegisteredSuccessfully(string entityType)
        {
            return $"{entityType} registered successfully.";
        }
    }
}
