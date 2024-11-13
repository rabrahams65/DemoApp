using Microsoft.AspNetCore.Identity;

namespace API.Helpers
{
    public static class ErrorMessage
    {

        public static string FailedToCreateEntity(string entityType)
        {
            return $"Failed to create {entityType}";
        }

        public static string[] ErrorList(IEnumerable<IdentityError> errors)
        {
            List<string> errorList = new List<string>();

            foreach (var error in errors)
            {
                errorList.Add(error.Description);
            }

            return errorList.ToArray();
        }
    }
}
