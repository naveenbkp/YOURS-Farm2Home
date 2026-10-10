using Microsoft.EntityFrameworkCore;
using ProductApi.Models;

namespace EmployeeApi.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Product> Products { get; set; }
    }
}
