using API.Core.Domain;
using API.Core.Repositories;
using API.Persistence;
using API.Persistence.Repositories;
using API.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IAccountRepository, AccountRepository>();
            services.AddScoped<IClientRepository, ClientRepository>();

            var dbHost = Environment.GetEnvironmentVariable("DB_HOST");
            var dbName = Environment.GetEnvironmentVariable("DB_NAME");
            var dbPassword = Environment.GetEnvironmentVariable("DB_SA_PASSWORD");
            var connectionString = $"Data Source={dbHost};Initial Catalog={dbName}; User ID=sa; Password={dbPassword}; TrustServerCertificate=True";

            services.AddDbContext<AppDbContext>(options => options.UseSqlServer(config.GetConnectionString("Azure")));
            services.AddIdentity<User, IdentityRole>(options => {
                options.User.RequireUniqueEmail = false;
                options.Password.RequireDigit = false;
                 options.Password.RequireLowercase = false;
                  options.Password.RequireNonAlphanumeric = false;
                   options.Password.RequireUppercase = false;
            }).AddEntityFrameworkStores<AppDbContext>().AddDefaultTokenProviders();

            return services;
        }
    }
}
