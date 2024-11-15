using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using API.Core.Domain;
using API.Core.Repositories;
using API.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers.ClientEndPoints
{
    public class ClientController : BaseApiController
    {
        private readonly IClientRepository _clientRepository;
        public ClientController(IClientRepository clientRepository) 
        {
            _clientRepository = clientRepository;
        }

        [HttpGet]
        //[Authorize]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [Route("all-clients")]
        public async Task<ActionResult<IEnumerable<Client>>> GetAllClients([FromQuery] QueryParameters queryParameters)
        {
            var result = await _clientRepository.GetAllClients(queryParameters);

            if (!result.Any()) return BadRequest(result);

            return Ok(result);
        }
    }
}