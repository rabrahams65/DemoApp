using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Core.Domain;
using API.Core.Repositories;
using API.DTOs.Client;
using API.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Persistence.Repositories
{
    public class ClientRepository : IClientRepository
    {
        private readonly AppDbContext _context;
        public ClientRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Client>> GetAllClients(QueryParameters queryParameters)
        {
                return await _context.Clients
                .Skip(queryParameters.PageSize * (queryParameters.PageIndex - 1))
                .Take(queryParameters.PageSize).ToListAsync();
        }
    }
}