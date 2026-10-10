using EmployeeApi.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductApi.Models;

namespace EmployeeApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public EmployeesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetEmployees()
        {
            var employees = await _context.Products.ToListAsync();

            return Ok(employees);
        }

        [HttpPost]
        public async Task<IActionResult> CreateEmployee(Product employee)
        {
            _context.Products.Add(employee);

            await _context.SaveChangesAsync();

            return Ok(employee);
        }
    }
}