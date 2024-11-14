using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class SeedAndCreateClientsTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Clients",
                columns: new[] { "Id", "Address", "Email", "Name", "Phone" },
                values: new object[,]
                {
                    { 1, "175-8643 Cras Av.", "rhoncus@yahoo.com", "Walker Dunlap", "1-756-778-8528" },
                    { 2, "Ap #384-5309 Aliquam Av.", "dui.cum.sociis@icloud.com", "Lesley Flynn", "(733) 706-5378" },
                    { 3, "P.O. Box 552, 4673 Dolor Street", "viverra.maecenas.iaculis@outlook.org", "Valentine Bowen", "1-658-338-1766" },
                    { 4, "Ap #993-1416 Ipsum Av.", "curabitur.massa@outlook.edu", "Odessa Aguilar", "1-438-538-8577" },
                    { 5, "Ap #380-2631 Neque St.", "dictum.eu@hotmail.com", "Cairo Carney", "(972) 514-6289" },
                    { 6, "9090 Eu Ave", "commodo@protonmail.net", "Grady Cleveland", "(638) 451-4867" },
                    { 7, "P.O. Box 486, 1655 Ipsum Avenue", "enim.suspendisse@hotmail.org", "Jaime Clements", "1-294-529-1445" },
                    { 8, "Ap #662-5027 Mauris Rd.", "magna.cras@icloud.com", "Callie Pena", "1-763-906-5555" },
                    { 9, "6727 Sit St.", "aliquam.nec.enim@protonmail.couk", "Darius Cabrera", "(535) 155-5231" },
                    { 10, "2356 Donec St.", "a@hotmail.net", "Allen Jennings", "1-967-811-4718" },
                    { 11, "Ap #533-3573 Ac Ave", "et.nunc@google.com", "Kennedy Paul", "(248) 762-9781" },
                    { 12, "P.O. Box 544, 8914 Euismod St.", "eros.proin@aol.org", "Joshua Duncan", "(207) 431-7447" },
                    { 13, "284-5620 Parturient St.", "purus@aol.edu", "Oleg Grimes", "1-351-882-6315" },
                    { 14, "333-2382 Eu Avenue", "et.malesuada@yahoo.couk", "Kay Spears", "(461) 845-7299" },
                    { 15, "661-8553 Phasellus Av.", "consequat.nec@yahoo.edu", "Macy Chavez", "1-659-218-6557" },
                    { 16, "4320 Ipsum St.", "ipsum.ac.mi@protonmail.com", "Cameron Fleming", "1-744-272-1687" },
                    { 17, "Ap #403-4298 Eros. Ave", "donec.feugiat.metus@protonmail.edu", "Kibo Wade", "1-632-556-2997" },
                    { 18, "4867 Non, Rd.", "adipiscing.ligula@aol.com", "Shelby Kelley", "1-672-793-8588" },
                    { 19, "668-7154 Nullam Street", "nunc@hotmail.couk", "Judith Hobbs", "(273) 846-3377" },
                    { 20, "599-3498 Odio, St.", "orci.luctus.et@icloud.ca", "Isadora Mendoza", "1-313-667-9603" },
                    { 21, "928-3422 Sed, St.", "vitae.erat@aol.com", "Francis Downs", "(324) 380-3566" },
                    { 22, "3983 Mauris Avenue", "mauris@google.ca", "Mallory Maxwell", "1-944-601-1472" },
                    { 23, "P.O. Box 299, 6307 Mi Rd.", "eu.odio@protonmail.couk", "Unity Larsen", "1-585-268-3515" },
                    { 24, "9368 Ut, Rd.", "imperdiet@outlook.edu", "Hyatt Craig", "(249) 651-0222" },
                    { 25, "Ap #167-6481 Aptent Ave", "quis.arcu@google.couk", "Jonah Hutchinson", "1-654-712-1501" },
                    { 26, "Ap #973-8996 Risus Rd.", "interdum@google.edu", "Keaton Travis", "(378) 163-7101" },
                    { 27, "300-1766 Ligula Road", "iaculis.nec.eleifend@yahoo.net", "Timon Bond", "1-524-658-3325" },
                    { 28, "197-459 Aliquet. Rd.", "eleifend@protonmail.edu", "Lisandra Peterson", "1-655-957-9132" },
                    { 29, "424-5260 Neque Ave", "sem.mollis@google.edu", "Yuli Burch", "(427) 453-6142" },
                    { 30, "Ap #173-9457 Consectetuer Road", "eu.neque@hotmail.ca", "Denton Long", "(871) 216-6886" },
                    { 31, "686-9354 Ac Avenue", "proin@outlook.ca", "Hadley Waters", "1-704-268-0966" },
                    { 32, "646-6553 Tempus Rd.", "integer.vulputate@hotmail.couk", "Cassady Ingram", "1-889-603-8469" },
                    { 33, "8278 Eros St.", "sem.eget@outlook.couk", "Olivia Melendez", "1-483-397-3219" },
                    { 34, "Ap #666-4284 Vivamus Street", "vehicula.risus@hotmail.com", "Fatima Hill", "1-756-238-6505" },
                    { 35, "Ap #737-5707 Ut St.", "praesent.luctus@protonmail.org", "McKenzie Farmer", "(419) 781-3315" },
                    { 36, "Ap #488-3589 Sit St.", "eros@icloud.org", "Petra Delaney", "1-765-517-0753" },
                    { 37, "8623 Imperdiet Av.", "sapien.cursus@protonmail.ca", "Ronan George", "(979) 573-0280" },
                    { 38, "430-6273 Nunc St.", "risus.duis@outlook.org", "Blossom Franco", "(904) 765-6812" },
                    { 39, "126-3197 Leo Ave", "eleifend.non@yahoo.couk", "Kasper Hernandez", "1-268-327-6484" },
                    { 40, "1706 Rutrum Ave", "ornare@aol.ca", "Laurel Acosta", "1-481-187-8686" },
                    { 41, "Ap #995-2889 Ipsum St.", "est@aol.couk", "Melissa Barber", "1-208-486-2847" },
                    { 42, "131-3269 Ante Ave", "cursus@icloud.net", "Martin Stanley", "(668) 634-0594" }
                });

            migrationBuilder.InsertData(
                table: "Clients",
                columns: new[] { "Id", "Address", "Email", "Name", "Phone" },
                values: new object[,]
                {
                    { 43, "P.O. Box 568, 7162 Morbi St.", "ipsum@protonmail.org", "Macon Pace", "1-559-734-4983" },
                    { 44, "262-1422 Turpis. Rd.", "eu.turpis.nulla@protonmail.couk", "Giacomo Prince", "1-215-426-4288" },
                    { 45, "1365 Eu Rd.", "sit.amet@icloud.org", "Joseph Alston", "1-746-396-3766" },
                    { 46, "1624 Aenean St.", "nisl.nulla@protonmail.edu", "Nolan Goodwin", "1-943-197-7017" },
                    { 47, "Ap #355-3788 Amet Ave", "integer.tincidunt.aliquam@google.org", "Davis Rhodes", "(744) 664-7044" },
                    { 48, "P.O. Box 598, 5537 Dictum Av.", "arcu.imperdiet.ullamcorper@aol.couk", "Amir Wells", "(904) 185-9180" },
                    { 49, "Ap #352-2405 Nonummy. Rd.", "vel.mauris@protonmail.edu", "Emery Kerr", "(915) 210-1548" },
                    { 50, "539-1608 Volutpat. Rd.", "in.mi@aol.com", "Kenneth Whitley", "(888) 266-7052" },
                    { 51, "114-7565 Ac Ave", "arcu.vel.quam@protonmail.ca", "Regan Hines", "1-366-486-8687" },
                    { 52, "662-9329 Quis Street", "curabitur.egestas.nunc@google.couk", "Savannah Sanders", "1-311-429-2182" },
                    { 53, "868-771 Ut Street", "libero.est.congue@hotmail.ca", "Joelle Barlow", "1-622-127-3324" },
                    { 54, "Ap #316-6290 Aptent Avenue", "dolor.nonummy@yahoo.com", "Chantale Suarez", "1-113-255-6555" },
                    { 55, "8413 Etiam Ave", "egestas.blandit@aol.org", "Stuart Castaneda", "1-157-365-6216" },
                    { 56, "P.O. Box 865, 316 Nulla Ave", "morbi.quis@icloud.ca", "Shaeleigh Battle", "1-314-788-5584" },
                    { 57, "Ap #124-1406 Nec, Ave", "per.conubia.nostra@aol.net", "Rebecca Bender", "1-912-575-0657" },
                    { 58, "Ap #501-7722 Eu, St.", "magna@aol.org", "Moses Weiss", "1-764-866-6162" },
                    { 59, "P.O. Box 644, 2777 Nec, St.", "vitae@yahoo.net", "Declan Knowles", "(317) 965-0457" },
                    { 60, "P.O. Box 380, 4416 Fames Street", "lobortis.risus@protonmail.edu", "Herrod Moon", "1-387-411-0724" },
                    { 61, "152-643 Dui, Road", "vulputate.mauris@aol.ca", "Lucas Barton", "1-386-900-1170" },
                    { 62, "P.O. Box 177, 6210 Dis St.", "eget.nisi@icloud.org", "Jessamine Booth", "1-947-677-7052" },
                    { 63, "Ap #114-9406 Faucibus St.", "arcu.iaculis@protonmail.couk", "Zelenia Ford", "1-778-969-9709" },
                    { 64, "Ap #671-8672 Pharetra Rd.", "urna.nunc@aol.couk", "Brandon Mckenzie", "1-371-741-2404" },
                    { 65, "Ap #769-3221 Mauris Rd.", "eleifend.non@yahoo.edu", "Jasper Williamson", "(524) 459-6682" },
                    { 66, "P.O. Box 409, 6436 In, Street", "in.aliquet@hotmail.edu", "Pamela Griffin", "(373) 876-2450" },
                    { 67, "775-1504 Tincidunt St.", "commodo.at@outlook.net", "Elmo Singleton", "1-994-876-4111" },
                    { 68, "712-5462 Metus Road", "non.sapien@aol.net", "Margaret Simpson", "(408) 525-1090" },
                    { 69, "4573 Ac Rd.", "mi.tempor@google.couk", "Tana Hayes", "(533) 266-2172" },
                    { 70, "195-4423 Interdum. Av.", "gravida@hotmail.ca", "Marvin Berg", "1-183-836-7359" },
                    { 71, "8369 Consectetuer Street", "ipsum@icloud.org", "Ciara Duncan", "1-559-785-0373" },
                    { 72, "453-985 Pharetra. Av.", "enim.commodo@protonmail.edu", "Hamilton Santos", "(607) 667-1298" },
                    { 73, "Ap #696-5509 Eu Street", "volutpat.ornare.facilisis@yahoo.edu", "Glenna Frederick", "(593) 886-6264" },
                    { 74, "562-5651 Dui, St.", "eu@hotmail.couk", "Indigo Lindsay", "(725) 369-5177" },
                    { 75, "216-9762 Consectetuer Street", "dolor.nonummy.ac@hotmail.org", "Channing Monroe", "1-200-711-9862" },
                    { 76, "P.O. Box 595, 2170 Arcu Rd.", "a@hotmail.com", "Alan Decker", "(783) 816-4935" },
                    { 77, "Ap #291-3174 Vel, Av.", "suspendisse.aliquet@aol.edu", "Lucian Wilkins", "(838) 631-6708" },
                    { 78, "Ap #633-472 Duis Av.", "eros.non@aol.edu", "Catherine Crane", "1-884-582-2053" },
                    { 79, "1338 Iaculis, Street", "morbi.sit.amet@google.net", "Gay Reed", "1-514-378-1083" },
                    { 80, "237-5330 Velit. St.", "phasellus.in.felis@google.ca", "Richard Snider", "1-573-474-1764" },
                    { 81, "146-6172 Lorem, St.", "tempus.eu.ligula@aol.couk", "Portia Valdez", "(644) 471-2189" },
                    { 82, "1491 Hendrerit Road", "penatibus.et.magnis@aol.com", "Avye Carlson", "1-918-920-6268" },
                    { 83, "Ap #535-2809 Integer Avenue", "erat.eget@yahoo.com", "Alexis Arnold", "1-774-479-3553" },
                    { 84, "P.O. Box 750, 6605 Viverra. St.", "mattis.cras@hotmail.com", "Medge Hubbard", "1-416-874-4265" }
                });

            migrationBuilder.InsertData(
                table: "Clients",
                columns: new[] { "Id", "Address", "Email", "Name", "Phone" },
                values: new object[,]
                {
                    { 85, "437-6562 Purus, Rd.", "ac@outlook.edu", "Harding Wise", "(247) 172-8557" },
                    { 86, "264-3980 Scelerisque St.", "turpis@outlook.com", "Hope Hawkins", "(723) 928-1871" },
                    { 87, "551-2465 Id Road", "curae.phasellus.ornare@google.com", "Ramona Russo", "1-676-549-8461" },
                    { 88, "P.O. Box 758, 8535 Non Rd.", "et.rutrum@icloud.edu", "Chloe Roberson", "1-626-668-3977" },
                    { 89, "P.O. Box 321, 3121 Lobortis Av.", "ut.cursus@protonmail.couk", "Dante Blackwell", "(324) 867-3674" },
                    { 90, "Ap #717-5453 Pellentesque Street", "nisi@outlook.org", "Randall Chavez", "(661) 944-1553" },
                    { 91, "P.O. Box 319, 6438 Turpis St.", "elementum.purus.accumsan@outlook.com", "Amena Vaughan", "1-813-431-1825" },
                    { 92, "154-3877 Bibendum Av.", "luctus.felis@protonmail.ca", "Adrienne Delacruz", "(542) 381-5047" },
                    { 93, "Ap #223-4649 Non St.", "volutpat.nunc@icloud.couk", "Tasha Waters", "1-317-336-6625" },
                    { 94, "Ap #614-2860 Scelerisque Av.", "id@protonmail.couk", "Sheila Hines", "1-675-414-2648" },
                    { 95, "3609 Ultricies Av.", "sed.eget.lacus@outlook.couk", "Melvin Sparks", "(584) 443-3016" },
                    { 96, "Ap #732-320 Ornare, Street", "vel.nisl@hotmail.com", "Giselle Higgins", "1-214-437-2411" },
                    { 97, "P.O. Box 785, 1821 Cursus Avenue", "justo.faucibus@yahoo.net", "Oliver Carter", "1-332-503-1227" },
                    { 98, "450-5963 Ipsum Road", "aliquam.enim.nec@aol.ca", "Caesar Romero", "1-722-293-2236" },
                    { 99, "871-3209 At, St.", "habitant.morbi@hotmail.com", "Ryder Crawford", "1-252-846-9668" },
                    { 100, "7764 Eu Rd.", "sem.ut@icloud.com", "Charde Bruce", "(706) 247-6566" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Clients");
        }
    }
}
