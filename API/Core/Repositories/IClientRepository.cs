using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Core.Domain;
using API.DTOs.Client;
using API.Helpers;

namespace API.Core.Repositories
{
    public interface IClientRepository
    {
        Task<IEnumerable<Client>> GetAllClients(QueryParameters queryParameters);
    }
}