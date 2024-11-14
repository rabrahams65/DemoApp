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
            services.AddDbContext<AppDbContext>(options => options.UseSqlServer(config.GetConnectionString("DefaultConnection")));
            services.AddIdentity<User, IdentityRole>(options => options.User.RequireUniqueEmail = true).AddEntityFrameworkStores<AppDbContext>().AddDefaultTokenProviders();

            return services;
        }
    }
}
