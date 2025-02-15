const dataResume = [
  {
    company: "BEM FEB UNPAD",
    tahun: "2024 - 2025",
    position: "Web Development | Researcher and Development",
    deskripsi:
      "Bertanggung jawab membangun dan memelihara website menggunakan **React.js** untuk front-end dan **Express.js** untuk back-end. Saya mengimplementasikan **Font Awesome** dan **Google Fonts** untuk meningkatkan estetika dan pengalaman pengguna, serta berkolaborasi dengan tim untuk memastikan website yang fungsional dan responsif.",
    tools: ["JavaScript", "HTML", "CSS"],
  },
  {
    company: "Dningrum UMKM Fashion Bandung",
    tahun: "2022 - Sekarang",
    position: "Sosial Media Manager",
    deskripsi:
      "mengelola Instagram dan Facebook Ads untuk promosi penjualan fashion wanita, termasuk menciptakan 30+ desain grafis untuk konten media sosial guna meningkatkan engagement. Melalui optimasi iklan, saya berhasil menjangkau lebih dari 100.000 pengguna potensial, yang berkontribusi pada peningkatan penjualan secara signifikan.",
    tools: ["Meta Ads", "Figma", "Canva"],
  },
  {
    company: "PT. Artha Kartika Putra",
    tahun: "2023 - 2023",
    position: "Project Data Analyst",
    deskripsi:
      "mengelola Instagram dan Facebook Ads untuk promosi penjualan fashion wanita, termasuk menciptakan 30+ desain grafis untuk konten media sosial guna meningkatkan engagement. Melalui optimasi iklan, saya berhasil menjangkau lebih dari 100.000 pengguna potensial, yang berkontribusi pada peningkatan penjualan secara signifikan.",
    tools: ["Knime", "Excel", "TableAu"],
  },
  {
    company: "PT. Star Energy Geothermal Wayang Windu",
    tahun: "2024 - 2024",
    position: "Ketua Project KKN Kolaborasi Unpad & SEGWW",
    deskripsi:
      "Melakukan social mapping di Desa Pangalengan untuk menganalisis dampak sosial dari proyek perusahaan. Melalui wawancara dengan stakeholder lokal, saya menyusun laporan CSR yang komprehensif, yang membantu perusahaan merumuskan strategi tanggung jawab sosial yang lebih efektif dan berkelanjutan.",
    tools: ["GDocs"],
  },
];
const cursor = document.querySelector(".cursor");
const aboutMe = document.querySelector(".about-me");
const viewAbout = document.getElementById("about-me");

// Resume
const resumeContainer = document.querySelector(".resume-content");

class Resume {
  constructor(item) {
    const { company, position, tahun, deskripsi, tools } = item;
    this.company = company;
    this.position = position;
    this.tahun = tahun;
    this.deskripsi = deskripsi;
    this.tools = tools;
  }

  // Instance method untuk membuat HTML
  generateHtml() {
    return `
      <div class="resume-items">
        <div class="resume-item-tahun w-1/5">
          <p>${this.tahun}</p>
        </div>
        <div class="resume-item-content w-4/5 flex-cols gap-2">
          <span class="headline-point mb-1">
            <span class="position">${this.position}</span> - 
            <span class="company">${this.company}</span>
          </span>
          <p class="text-[1rem] text-justify">${this.deskripsi}</p>
          <div class="tools">
            <ul class="flex-rows gap-4">
              ${this.tools
                .map((tool) => `<li class="bg-tools">${tool}</li>`)
                .join("")}
            </ul>
          </div>
        </div>
      </div>
    `;
  }
  static hoverItems(container, cssActive, cssUnactive) {
    container.forEach((item) => {
      item.addEventListener("mouseover", () => {
        item.classList.add(cssActive);
        const itemsNotHovered = Array.from(container).filter(
          (otherItem) => otherItem !== item
        );
        itemsNotHovered.forEach((notHoveredItem) => {
          notHoveredItem.classList.add(cssUnactive);
        });
      });

      item.addEventListener("mouseout", () => {
        item.classList.remove(cssActive);
        container.forEach((otherItem) => {
          otherItem.classList.remove(cssUnactive);
        });
      });
    });
  }
}

class HtmlRenderer {
  static renderHtml(containerElement, html) {
    containerElement.insertAdjacentHTML("afterend", html);
  }
}
dataResume.forEach((item) => {
  console.log(item);
  const resume = new Resume(item);
  HtmlRenderer.renderHtml(resumeContainer, resume.generateHtml());
});

const itemsResume = document.querySelectorAll(".resume-items");
Resume.hoverItems(itemsResume, "resume-items-active", "resume-item-unactive");

// btn OBJECT
const btnAbout = document.querySelector(".btn-about");
const btnAll = document.querySelectorAll(".btn");

class ButtonNavbar {
  constructor() {
    this.button = btnAll;
    this.activeButtonClass = "btn-active";
  }
  activeButton() {
    let itemNow = btnAbout;
    itemNow.classList.add(this.activeButtonClass);
    this.button.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const targetElement = e.target.getAttribute("href");
        const viewScroll = document.querySelector(targetElement);
        console.log(viewScroll);
        viewScroll.scrollIntoView({ behavior: "smooth", block: "start" });
        this.button.forEach((otherItem) => {
          otherItem.classList.remove(this.activeButtonClass);
        });
        itemNow = item;
        itemNow.classList.add(this.activeButtonClass);

        console.log(itemNow);
      });
    });
  }
}

const buttonNavbarInstance = new ButtonNavbar();
buttonNavbarInstance.activeButton();


class DarkMode {
  constructor() {
    this.darkMode = document.querySelector(".dark-mode");
    this.darkMode.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }
}
// let previousCursor = null;

// document.addEventListener("mousemove", function (event) {
//   if (previousCursor !== null) {
//     previousCursor.remove();
//   }

//   const cursor = document.createElement("div");
//   cursor.classList.add("cursor");
//   cursor.style.left = `${event.clientX - 50}%`;
//   cursor.style.top = `${event.clientY - 50}%`;

//   document.body.appendChild(cursor);

//   previousCursor = cursor;

//   var x = event.clientX;
//   var y = event.clientY;
//   console.log(x, y);
// });
