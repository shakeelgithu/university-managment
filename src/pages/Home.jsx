import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

// EyeCatchingCard Component
const EyeCatchingCard = ({ title, description, link, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card border-0 p-3 m-3 ${isHovered ? "shadow-lg" : ""}`}
      style={{
        backgroundColor: isHovered ? "#0c2340" : "#ffffff",
        color: isHovered ? "#ffffff" : "#333",
        transition: "all 0.3s ease",
        borderRadius: "15px",
        overflow: "hidden",
        position: "relative",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={title} className="card-img-top" style={{ borderRadius: "15px 15px 0 0" }} />
      <div className="card-body">
        <h5 className="card-title" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>{title}</h5>
        <p className="card-text">{description}</p>
        <Link to={link} className="btn btn-light" style={{ borderRadius: "20px" }}>
          Learn More <FaArrowRight />
        </Link>
      </div>
      <style jsx>{`
        .card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
};

function HomePage() {
  return (
    <div>
      <div className="background bg-body-secondary">
        <div className="container-fluid">
          <div className="scrolling-alert">
            <div className="scrolling-text">
              <span className="fw-bold">Fee Alert:</span> All students can download their fee voucher at this <Link to="/fee">link</Link>
            </div>
          </div>

          <div className="home">
            <div className="row">
              <div className="col-md-4 banner">
                <div className="text ms-5">
                  <h6 className="fw-normal text-uppercase fs-5 mt-5 mb-3">Welcome to FUUAST</h6>
                  <h1 className="title">
                    Your Academic Journey <br /> Starts Here
                  </h1>
                  <hr className="title-after" />
                  <p>
                    The Federal Urdu University of Arts, Science & Technology enjoys the unique distinction of
                    being the first ever university in Pakistan, which ultimately aims at using Urdu as the
                    main language of instruction and teaching. The university was established on <span className="highlight">13th November 2002</span> under Ordinance No. CXIX of 2002, promulgated by the President of Pakistan.
                  </p>
                </div>
                <p className="cta mt-5">
                  <a href="/eligibility" aria-label="Learn more about eligibility policies." className="btn btn-inline">Learn More <FaArrowRight /></a>
                </p>
              </div>

              <div className="col-md-8">
                <div className="img">
                  <img className="nav-img" src="https://irfuuast.com/wp-content/uploads/2022/11/Fuuast-e1669562906537.webp" alt="FUUAST Campus" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h2 className="mt-5">Featured Sections</h2>
        <div className="row my-4">
          <div className="col-md-4">
            <EyeCatchingCard
              title="Eligibility Policies"
              description="Find out about admission requirements and eligibility criteria."
              link="/eligibility"
              image="https://wikitechlibrary.com/wp-content/uploads/2022/07/FUUIAST.webp"
            />
          </div>
          <div className="col-md-4">
            <EyeCatchingCard
              title="Merit List"
              description="View the merit list for the current academic session."
              link="/merit-list"
              image="https://wikitechlibrary.com/wp-content/uploads/2022/07/FUUIAST.webp" alt="merit-list"
            />
          </div>
          <div className="col-md-4">
            <EyeCatchingCard
              title="Academic Resources"
              description="Explore our comprehensive academic resources."
              link="/academics"
              image="https://wikitechlibrary.com/wp-content/uploads/2022/07/FUUIAST.webp" alt="academies"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="vision-mission-section text-center p-5" >
          <h2 className="mb-4" style={{ fontWeight: "bold", fontSize: "2.5rem", color: "#2c3e50" }}>Our Vision & Mission</h2>
          <p className="lead mb-5" style={{ fontStyle: "italic", color: "#34495e" }}>
            Inspiring excellence and fostering a community of learning, innovation, and growth!
          </p>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card text-center" style={{ border: "none", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
                <div className="card-body" style={{ backgroundColor: "#ecf0f1", borderRadius: "15px" }}>
                  <h4 className="card-title" style={{ color: "#2980b9" }}>Our Vision</h4>
                  <p className="card-text" style={{ fontSize: "1.2rem" }}>
                    To be a leading university recognized for excellence in education and research, producing highly motivated graduates ready to tackle the challenges of the modern industry and contribute positively to society.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card text-center" style={{ border: "none", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
                <div className="card-body" style={{ backgroundColor: "#ecf0f1", borderRadius: "15px" }}>
                  <h4 className="card-title" style={{ color: "#2980b9" }}>Our Mission</h4>
                  <p className="card-text" style={{ fontSize: "1.2rem" }}>
                    We aim to provide an educational environment that not only equips students with essential skills but also fosters social responsibility, empowering them to enact change and enhance the nation's economy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button className="btn btn-success mt-4" style={{ fontSize: "1.2rem" }}>Join Us in Our Journey!</button>
        </div>


      </div>

      <div className="container-fluid mt-5">
        <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#343a40" }}>Programs of Study</h2>
        <p className="text-center mb-5" style={{ fontSize: "1.2rem", color: "#6c757d" }}>
          Explore our diverse academic offerings and find the program that fits your passion and career goals.
        </p>

        <div id="programsCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {Array.from({ length: 3 }).map((_, carouselIndex) => (
              <div className={`carousel-item ${carouselIndex === 0 ? "active" : ""}`} key={carouselIndex}>
                <div className="row justify-content-center">
                  {[
                    {
                      title: "Computer Science",
                      description: "Dive into the world of programming, algorithms, and software development.",
                      imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFhUXGBoYGBcYFxYYGBgYFRYXGRUYFxgYHyggGBomGxcWITEiJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGzUlHyYrLS0tNi0tLy0tLS0tLy0tLy0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJYBUQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAMEBgcCAQj/xABIEAACAAMFBAUGCgkDBQEAAAABAgADEQQFEiExBkFRYRMicYGRMkKTobHRBxQVI1JUc5LB8DNDU2KCs8PS4XLE8RYkorLCNP/EABoBAAIDAQEAAAAAAAAAAAAAAAIDAQQFAAb/xAAxEQACAgEDAgQEBQQDAAAAAAAAAQIRAxIhMQRBE1FhcSIykbEzcoGh0SM0YvAFFOH/2gAMAwEAAhEDEQA/AMw2gvu1C1WgC0zwBOmAATZgAAmNQAVgf8vWv61aPSzPfBC/bCptVo/SVM2c2g8lXcsRyAVjXkYgNYFBoekB5gDOG+HLyA1I7k33aic7VaABr87M98EZk+2qKm0WnUAgTyWBYYlDKCWUkA6gaHhAlbLhZ1OYFBXvgsLRNBwZYmIYneThYAE6ACrHKlSamuUHDHa3BlOjpJtsJRfjFpDOSADPcHKhJap6ooa1O4E6R1aHtqEBp9qzLAETnzwUrzGoOYGREdSjPE2WVUF8RCqKNiLAKykA5gjLsJghetrnypirOkCX1SVTMg4yMTYqmp6tOWe8mrPCiL8RgGbelpAqLVaOwzZnvhv5ZtP1m0emmf3Q9bwXOKmEEAZAnQ8IHrJ7fumAlCnwEp2uSSL5tX1m0emmf3Qmvi1fWbR6aZ/dDZs9OP3THnxcnj90wOgnUOLfNq+s2j0sz3w58r2r6zaPTTP7ojdDTefCHehrnEqBDkOfK9q+s2j00z+6F8r2r6zaPTTP7oa6LlCMmC8MHxBz5YtP1m0emmf3QjfFq+s2j00z+6GOhMePKIiNHoFqH/lm1fWbR6aZ/dHLX1avrNo9NM98RCIWGB0oKx/5ctf1m0emme+Eb8tf1qf6WZ74jiSY8eSeERoJ1Ej5dtf1q0elme+PPl61/WrR6WZ74hskcEQLiEmTvl61/Wp/pZnvjw3/AGv61P8ASzPfEAiPCIGiQh8v2v61P9LM98H9j74tLtPDWic1JNRWY5oenkioqeBPjFPiybDjrz/sP68iDwL+pH3QrqHWKXsy0m8J37ab99/fHJvCd+2m+kf3xwVjgrHoNEfI80skvM7N4z/2030j++ODeU/9tN9I/vh+yXe8zyRDU6zYTQ0qPzTtgdMeBqnIa+UZ/wC2nekf3xwbwtH7eb6V/fBO57qM9yCwVFFXc6AfiTuEd35ciykR5bl1aoNVwkMKZUqfyIBqF0NjKbVgR7ztA/XzvSP74Za9LR+3nelf3x70VSd2UcPZDuI9cT4V7pDI5fU5a9bR9Ynelf3w017Wj6xP9LM98czZJGoiOwhTgvIsRm/Mda97T9Yn+lmf3Q018Wn6zP8ATTP7oZYQ0wgHFD4yZKW+LUSALRaCTkAJswkk6AZw5JvC2uSqTbUxGoV5zEU1qAcoiXdNCTpTtkqzEYngFcE5DkIMvPlYZstLUqFp/TdIFtAVlIYBDSXjDKTiGWHrHOohcqXYct+5BN42yinprVRjRT0k6jHgpr1j2RzabztiEq860owFaNMmqeWRNYL2e9ZQWWXnVmBejV0E4GWps8yWrzEYBS6MyANLqSMR1pURfFpUypUsTOlaWJlXAfDR2BVF6QBiBQnMDNzSE65eIo6dvP6/x+4elabs2/4y/wBNvvH3woahRUJKZfFqk9K+OWCwM4GgIA6RpgFDvymzajTJdIG2h0c1SWAWLA1rWhotSN7FQufENlnlOvd26ab1v1j8fpmG7BPmhwFahJABIrQmlDnpTKNaONUZryMB3lYB080DIFiByz4RY7TNDSklyrOksI4cEEtXCjrQ5Anyta7osexV1C2WiYSi9GoJo1K5kULGhJJqeqpUZHvsN7bNsk1ElEAM2HCVlkAnMEErXCRXWpGE65Qm4RnpYTc3DWjLbDKaXOScgQMhqAFouhBBA1qCRxzibftra0OHdEGEUVRXKubZnWpjQ9pNlDKk40K41FScCYWAPWqCpKkLUgg0OEigyh2ybFA2fHNK4mAYEIlUBGpGHC24kUG+hO/vGx1q/Q5wyXpoxq0Sagim6nhDV2XS0xyoGgqa6aEjxANI0SRdKhKzEUuJry26kunUoMurxrEKZNRJoAlqGZRp1TVZKkAgClKMQN+Qh9JsTrdWB5Gy4qcVTRQRwJwFmHMA4YcsWzQmPNFKBWYAUyzL0p2ELF1sqkpXAMx9LiuHhDF32pEZgymrOWypv5wPnRCk+5QLTs+3lYT4cNYHi6yp0PhxjUrfZV6OtBvPifbFRWWOlpz49sFGEZM55ZRW55c2yPSmpBpw/wA8Idt2xJViBpuPERqez11I0kEU7IE37aikxVpWuXgGNfVA64uTilwJi8qalJ7PgzVdmsJ6wgbfV3ooyi6XxanIJoKD2RQrRbhNUspqN/I84mSSRaxuTdgmVYamCtnuEkaRxd0wYu+LtdoBXTX11gIY41YzJkaK5d2zwOv4RxelwhTlFpm9WuefdAi8Z5JhvhqhSySspluu+kR5N3FoLXg+cO2aYFFPGK7xJssrI6As27CIjvYqRZzOLGirXkBXLfnrDSbPWqYThlEDPNuqMgYXLEuwccvmVSZIg7sOvzk/7D+vIgguyTfrXA5DP1w1ssssWi0LLrhEmgJOtJ8ip8YCGJxyRb80RmyKWKdeTDZWO7PIDHMgdun598elY5BpG60eaUifYLSy5IM95yoAcusTkBWmsD7QMRrvOp3d3GJEtakAb8t/rg1JuQtKM0L1VoCa51NKAZ8xCZOMHY6GqSoDXHeXxecHNSuYdR5ykZjnDN9XgJjHBUJWoB3ctTEmTY0M6Wsw0UsAc9xzArurpXdBC+bFIloCksK9CWUtUFQopQNUrUk55VoCMiIF6dV1uOhq0lUsyVY9giw3fdhZcQpnxAPhUQBs2RJ7PxgtZbzKClTT2+4wxqWnYKLje57a7jLI8xSo6Olc6VB0wiBU7Z1ymPCQOI90SbTeBNdak8dw0yg++1p+KfFsApx3619vKAyKdLaxuLZszS0yCpofGIrCDVqQknLLmQNTSv8AmBsyzmvL85dsLlja4LcJkJo8hyalDDcJaplhCjx9D2R7Hj6HsiCUb5ChQozB5Rbzo1omKC1TNYAVAzxkDUUESbtulxMQlSAGB8uUd+8Bo7tdlKWrpSCEFoNWpkKTKnTtEWMXpKfqrPIJI0VuIy8ka6d8azk0lSMpJb2yBstez2Isxlswckjo8JmKMgR5wZTReqQKEVBGdStr2gnz5izFWYgU4hVSWLZUYkAAEYRQAUGetTUTs8gaZSpagY4jXOjDM1zi1WKzZ0/OlfxEDkjCM3JrcBZJuCjexW9ptoLZOopaYoApRZbUINCagAVrQa15UqamLp2pnrIEt1dsIGGqkKoUZYssTAUGVd2ZMPz7HUnsHjQQytnpLfLRZnqUiArG1VEueRb2c2VT0S1zPTvU8TlU95ir7SzKW06eU38tYttnX5sZfr3PsgLtbYi9qlU+g3iWcQSfx/UnHXhq/QVwXvilhSNBkQD4QPvW0Mr1GH7wHiCYeuyxFBXCMsxr1DU0bM505wRu65SbRLL0pQTQBXzZ2CjV7D6oLaO5F26IFnt7zFwqKkDOhDUryEBLxxSmrQ1J139g5RbrJc/QhMlDMCWIxUOIll3ilAwEVC/LG/SPUgnfnoOFTrBRlatAyW9MtV07SzpctDKJzAB0Iyyzru1ziLfO3s6YSoWSKUOMIcdVIIoa0GY4cRFasU6YoKAV1Iy8k0Okc3bc7Tp8uUThEx1UtwqQCe3hzpBZfDa1Vv3AwQyQk1q27GiWdkvWyTlFlaScBTplKsmI5Gnkljy7qxnmyths56aQizSFmvSeyDo3C0VesNG16vA1402N5spJZky/m7LZwFcjViPMHE8eNYxr4Sr2aeEl2dcCI9VRMsOEEKRThFBX8yXBo7P4PMcvbZaYnzkkVpnlmD2jWJtyW9WlhgVqKYgDXCd4PMRNuS8T0csZmiKMRJqaKMydSYKNccq1NiUFZ1MpiYQxA811NBMU86Ebs4tW47lVtS+FletJxE56xHmriqBqaZ8t/wCeQjtJbAlJiFJgyZDqD3RNl2YBcXnbgItRSaK85aSuz7tM1gFGpCrzY5+AGZ7uMX6x7LWGyopnqZkzLKlSSeWg/wAjjHdz3WskdOwBmeaDmAWOoHZ7OyHbQmPCKt9JzXMtTM9gGQ7+MLlDU9uDlnaIl8X1JkMVs9nWlOQ7ctTnFUvLau0NWgVRU7id/Gv4QZvWzFSBuCDLeKCtK86xWZ1nVVaZM/Rpm3FjoiDmxqO4xLxQjGx2Oepgm+r3nCV15hLTRktAMMve2Q1Y5DlUxH2C/Sz/ALD+vIgRedoaa7TH1Y7tANyjkBlBjYAfPT/sP68iMxT154+6+5ezRUenn7P7FrIjkinbD5EeyqYgW0jeZ5WLIyMVMGLPbmK4QWw7xuPfXX3xGtjS2cBT1dwi/bG7KoFE6cKg5oh0I+keXAb4rZpwjHVMtY4ZJz8PFz+yXmVm7dlLRaOsqYVPnPkO7j3QZX4MlOcyfnwVT7aiLpeN6LL6opX2Aez2DfHC2Wc4qzKoPGrH1EAeuKEusyPjZGti/wCMxx+ZuT+n2/kzu8tiZUl8KsWqAanI6ndn7YB2/Zp1BKio8fWI1G1XaxmrVgwNBmBzyEdWu5aCqih9UWsfWUkmUcvRz1yeNuk/f7/yYXOllDQ6w3Os8xallNAATUbm0PYY0e/7gSZ5QwtuYb+2KVarOyMUmbvWBpnw5RoY3HLwJWWUXTW4HkGhBUcamleVACaHf48o8cUNaVNa076584mNIq1FIApWu/spuizXVZeklSgUTqqwrglmtHYZkgknSGZGsMdlyO8XuUjaa1G0P0vRqhoAQooKj3gVivRd9q7OFZRhw1SpFAtTjcA0XLcIpc4Zxm5oqlJGj007jRxHj6Hsj2PH0PZCCyjfIUKFGYPK1tBa5bTzLQnAJjYiTqzMA57OqPA8YNXddVklWgnppLy8gA7SyVb4wnWB0p0YPid0U97Esy2uhcKrzWFXJwqTMnAsxWhK/NGgBBJYCvHiXdst7QqArLVmEuhZ+jViVUuSzFgnW0LEhsqxpydpJOtjNUae6stl3yZUh0IYANLOeIFa0lHJuZLeHKDsm9JWvSL49nujM9sbN8UykzQKO8tllzHaWzJLlTC8sOWI/S4WFTQqKHOgrdmvybUVmNqN/OEzyJvcZHp6RugvGUfPXxjudapXRuAyklWoO0aRjIv2aB5bePZHSbQTQRWY3jB6Y+YpwkbJddol9G3WA68zeBvWBO0doVZ6OGXCqmpqNcT0HaT+J3RT7pv9sLNNxMMNFNRrnu36xWLZeU12zfQU6zaCvDw0jtoy1Exxtx0s1O7rwQ58PbnTF+7/AJi0XYqHo334QvcZ0w+0Rg9mt01R5a+J055RMN/T6UE0/efwGUdOOpeRyhpldm2TnXq6DqDWv0V0pFJvES8ZpTuxa1P0s6xRvlqeP1jMeGJsuyu/89jM6/XPnEnefwiYVDkiWJzdo0q67LK5b/ZuiT8SkMGUqGDIykd1agjMEEAgjMGkZdZtonXQ7j7DEiw7WtLYsRi6rClaZsKAxzlF9yVjkmWe/bRMkWdJUty8p1E1g7HGHIoesa41K4daEHFrXL1bmlrKnTRimdHLaY7GmSotaKNBWmQ390VS+NolmS5CgksspQ+RoGAAIz10g98uiTdKIhrMtDsXPBUJVV7gK098cmltEJxb3ZF2Xv6y9G1VbErkUZ6rhOalQKZa5GuncDtn2jlggqoHAjWKlYdk1MtZjsqdIA6qBVsJ8k60WutOcN2i43QEypmPCCxByOEZkjsGcOxp18QvIoOXwss11WQWi32hFYBGAm1cknp3VCaMcwG63ZhHZBr5JeVMAnKaDvrw01HMRWNn54l61JJ6x31pT8Kd0aVY71LSSrAOMJwk6g06tO+kMalDjdFXLKMnud2Wz1YGooBWu4cxTU/jSJtns4XMAhACT++N4bca1pHdmu/6ByObDnvMF5lm+boBl+aRTy5VdWThxt26M7vWylsqdYmlN5JNTU9vsjLdrrzV36KWaypZND+0maPM7PNXlXjF/wDhKv4SEMpGpNmKRUay5RyZuTN5I7SYxefPqeHAcBuiOpz2tKLvR4GviY5Og7sAPnp32B/nyIrLTosvwems6d9gf50mK2F3lj7r7ljqlWCf5X9i4MIaaH2hl49GzyMWWLYW50tM5ukBwoAxoMjnkpO6ufgY1G32no1y10A/O4RQdire0qzN0aqSZwDk7gVUJXlm3iYsgvATsiQGXgQVI4gjIxjdVcsm/CPS/wDHwjDFa5e4O6WrNjXGrgB1rQsFbECreawOY47+IO2e2qyKJPkABV1yC5UzzqKUz4QPl2UNNAPkgFjzA18SVH8RiuXnaXtNomy5UxpMiWcExpZwtNmKM1Vh5Cr5NQQSVNTRRVSgpS2LspUt2W15xEwVnKpoKIyqa5nPMg8tYnpbSSqzKLU0BGaNyzzVuR8TGTT3lIfmgG4EOxZqZnCXADmmesW/Zy341COcSOMtcsqgcdK04FSIbPp/h1IoPLKLclx9GH7xSXioCCfZ/mM526uqq4l8pcx2bx7D4xdr1vaXJkMZq1mEtLrTymTNSTzGEwDvF8cnEVIqFOZrQMBUc8maO6WbhNWd1UFPG5xW63MwKila0MSZF+zkQKkxyoyAB07qRDwGrCmhO8afhpDKWGp1w8fO7MsuUbs05pdynHT3ZKvWbPtFMZYstaBz1tQDrkoxcdaxVrShGRFCDGg3Da0lHEyLOoioV6uRVqkjEaZ0is7Xzlea70AdiWKrQKor1RQb6a/5EU80ZJNNbFvp8keFyV2PH0PZHsePoeyKRdRvkKFCjMHmS318YE+fOwnAZ01MZK4DhmHqdYYTTLLdlEWdKtav1pbK4XQ4VpLNPMw0wHEN1OsOMa/fdjtUy65zEWQtLtVoZHJICD46ag0OEsWxa7lFakxX9uF6W9EE8oykgP0YZl6RZcquWZMsOorwANYdCTkuRUkk1tyZ7bTarRTEuKgwKFwBVBqQqS5YVUrnkAK5wLkymxAaEHfuprXwjRLbaXly5yzGZhNHVTM0Naq2EIMAXI9YnNda60oq5nthBJ6xyBPmmkdo4J1chZLnmYQQhNWVaAoWDOQEDLiqoJIFSAKmmscm6sNKqeORQ+xouN4221rY5WKV5L4cOHyFeajsxanzvWXDkerU1qaEUefKq7E6V9dMs+6LEedxHKuwlJLKmAKaZnzd/fEGZdEwlnC0Xq6lTSrb6EnU8N4jyRZcVRQ140PEVy8YJ2G6JxDIstjjoBlSpLyyNd9RDNF0LeRRsFmxTQMloNNwrrxz3R0ljcLV8Q+iFXFWvEg5CleJrug4dg7cBV0KCmZJJy7oI3V8HNomiomqOZqAf9Nde2JvvYGtcFRtUnAMsWY1ZcPmnTOAivGlbQ/B/OkypYRxNdi9RUgDIBQK5VzOfujPbddcyQ1Jsuan+pKeutPXCcrtpofhapoZRTmeR9YNIbCmJsiYppw3CO5jLAKIyyEFiTZwpoGU1BqCCQDXcw0Pb3aAR1LWsTpVhPCGwhYEp0T1vFiFCmoAw0Pm03dkeGZNIag1FNdzZeyG5NloeEFrps5dtMh7Tp26RfgttyjkkluifshdJapmA56Vyzrmc+z1xpNx3XQcoh7P2ALL64BNAdOzLlui12OQFoNMuPj64r9Tnq0hWODnK2TbNYQM4H7Y33LsdlmTZm4ZAasTkqrzJoO+Cj2xUUljQCPnX4UtsTapxwn5qWSsofScZPM5geSO0nfGUrb1SNeCgo6YlN2jvV5853mGrM2J+Fdyj91RkO+A7R6THNYiTsfFUcmLV8Hf6ad9h/WkxVTFq+Dv9NO+w/ryYLp/xo+6E9Z/bz/K/sXRobwkkACpJoANSToBHbGCmytqky5+OeaYVOA0qA3E030rSPSZJaYto8jggpTUW6LlcV2GRLWSh6560xhn1iKZV3AZCCt2bPyZBx9Zm+k5qfAUUdwj27J0qvSSmZwwqSwpT1Q7bbViPKMSblOX3PV48cMa2PJ1oq/8LAeKn2A+EZFNtmFrTY2cI7vaFDE5Yprs6EnmrL96NTkSDNelaKuZIOfAgewnt36VTbTZNbdNJk4VmS1VdMnHWwhqU0oaEEEVOcOwOMZU+AM+8NyuSJdstJs8lrP0KyGVnnHIYVYMSW0JoKChOsXOwSx0iKgyx17AOkY+p1+9AS5dlrelEKmg/eqPXp64ud33atnHXYNNI0Hmjl374ZknFcP6CKlkjpXfvTr9xq2XolnEx3RnDTcIwgGmGWikmuQzUiBl4kfFsR1Yn15D2iJNrvMopkKAQwpirmuI9Yt9ImrHLwivbdXqJckSxuHgTkB+fowrHBvIl/tET+DFL6L9TOenbGSozJP4++E/Smvk14VFe4VghcaIGUvpiUHs1I78hGvzrXZnlYZiphI0IFCKRq5eoeNraypFIwO1Ylz1BJAYYgKjUZ6HMZHiIETZmZyg9tLIVJrBDVQzKDyFKV40Bp3RXWMJ6mb2VmhhSqzyPH0PZHsePoeyKY9G+QoUKMweRJezFidpytOmlGms5lmaejxlqkmX5JNd+sTpNz2eW6dGwKhTUsVoNwEDZd+CV0ssAlukfPd5Z3mE98uwGHEMs6AnPtrSL6dKkZk4Tk92TLfctneuamu7GaV0yXFSvdA+1Tgh6Gy2ViAvXmYaKDwDHImvOOJtvZc2mS05u2I/dWBNs2nTNA82cxFBSktK7ufsgddUg44ZU299i64ZjJLx0AxAbyKdIuLAafSYV11yrA2dKkKc1UAalqqdaA7gNR4wPt952pZdnJokszAaqCcaLPQTApLnD1gSQFWtBpWhbl3pJOJnVatKq5JxfOChWXTDmSbOnpGiVNoX4F9zu22vohiWWWSlQ6gMAKkZkNlmD4GB7bS1B6JWVxhINVoCHXMDPOtN8SkvCyhkREmDEZKZ1FBVpgOMcGm4CCa+VwgKL5Wajky1YKoPWALEtPDGpUA+cRrwgtb7krDHtuOz9sLfq09xXPyVGXLq6Q7d+19tOazyRvxYAN5pUjWBsq3WY+VZpkvcejaZSnYzGJHQSJoPxeYsyYBXoXWYJhpWoSr0JpuHDsECpwfdDHjn5MsU2/VtQRZ05pU0NkwIwrXeSMufcIg3neFsseVoKz5baEgOjA6ZnMHlAGXd9pnL1LN2UBWuRGZZjxh677VStltWLCcqNX5tqZeuF5Wm1Q7BDSnZOs9jsNvV0l2dZE/CSrITQns07oze1S2luyOKMpII5iLFY7cbPaOrVTLb2H2GNDum6rJeAM55aGYRnkK1EBF6uRk1p3Rkt3vnnFqsQDEKDr+T3b4vy7E2UaS08In2fZGz64F8Is48qiirkTlwjL7VOUE4cxXU6nhFx2Iu1SFeaT1iXI3KoGp4Vp4d0TtqdnbOiypctB0kxwSR5q769uXhExJhkg0FAy4UAGVAaCvMU05xZU9cdinl22C9ktOIsT5I6xyoaCuEesCCBtxyLEVIrQUyHE8eUVwTlRQzGrEafnUc/wDmA9+7QiTKZ210A3knQDnASwp79hUZy+VcsY+Eza44TZ5bYSRV2HmJoe86Dt5RiVqtGNq6AZKOCjQRqlybOdKhn2rN5pxYeA3erTx3x7aNm5A0QeAinOGvjg1cU1iVPdmRtHMaVaLjlfRHgIgTrpljzR4CFPAxy6hMocWr4Pf00/7D+vJh2bdsvgPCJ+zNlVJk0qP1P9aRE4cbWWL9UB1ORPDNej+wdYxwBUgcY8Yw2xj0LPKRRrF1W9JEhJUyVNQKoGPDjR8vKDpUCvOkdTJw1BqNQeUBdmbDLmWOW84lnq+E4j1UU4QutNVPjD05FUgVOGueeVKE+0RkxhUn7npYTuEfZBiwSpQT4xh+dwGXiqfIxFqUrTXfSsALJbpXxmaXajgKqUYhtGL0ocxpXdkIH35tQo+ZlEV5bhyiiWydNM2bKxk9FMLFVU4wwBXIjOhGdK5xMYRVpsKTbpmym9KinTORwrT1gA+uAt73zJlatRzmADVzTeFrmc9T3xn6vQr086aEZEJ+cfLpXJUmjZ9Rfo98cWSSi2mbLQqwVgA6aOrk7+OuY103QMdLTaCbd7h+VfgSf86NxagPkmtAzk5VJ07OWdWvq8mtE0t5oOXM8ezcOQgjfk5D0snfLC4TTUKi6nkQPvmK4s46A5GlRuNNKxa6ek35lPM3Kn2+xNscyoK5kk6AZ7qEcc93vh03g1MJnZDIDMnsAiXdnxfomxgYweOeu41qtBmKA5xXJs86YjQVpn+cos+LGW0lwDCDXA1es4k0oRTjrnx5wJh+0PUwxFXPk1ysu440hR4+h7I9jx9D2QkYjfIUKFGYPMjvy9G+MT1q2U6YNTumMIHfGid58THF+/8A6rR9vN/mNEVTC3NhqKJvTmup8YSzs6k1/wA5H2xHV4WOO1E6Q58uMaVJyIPmgkhgwqQKnMA8yKmphxr4roicTkNc89OZ8YAiHlrlQ0g/HmL8CHkFv+onU5UHcIfG1k4Kyq+GtMxQHI1FCNM/ZAhZv0kRjxKgmHTPX9jJP8CxPiyfc7woLsT02stdKC0zPvGJVjvzp2VLVMZSCDKnZl5b6DOtSh3r35ECAFrKOoAlpLbUMopXkw0IgcHZTRoFSa9Qqs3TZzaOY01LPOVRNoKmoKzFOk2W3nA09uhBENfCJsmZqm0yQOkQVYfTUfiN0Zrcd8BgJcyZhKdaRMP6tvOB4owGY5AgVAiw/wDUFtdx5Zr1WQaBwaOg5EUYcnEWYJTK87huhjZy65V5JMlkYbQqAo4yBpx47ob2CtbyLSUc0wsUcfvBsJ9cQ7qS0LbA9jluKto3VAJqCAd4gzs/stPmWtp80qiscRQVNSTx7YJQdgynGn6mtWiQ2EEL31gZedsmSpRdZRbmNILydy50IpHmzMukubZXNShJHNHJK+7uiFSVi6bdGYWW/WNoLzj5TDLclNM9w0H/ABBy13goY0Vi2eTeSCdcopu2tm6Kc6DIAkb+OnhSHbhvMzZeEn5yWAK72TIKRzU0U8ivAxoQlG0ipPG2rDc20nMsc9/L3RXbDKNutOImkiScv3mrnT2ePKGr8tbMVssrOZMOZHmrv7zpFwuq7Us8lZa0yGZ4nfA58lvQicOPQtT5ZImMFAAOUDbVPHGJNoAgZaUEKSDbIVonDjAy0zBxiZaJQgbPWBkMgiJOmCJVwTAXm/Y/1pMQpwESdnx15v2P9eRC8f4kfdE5vwpezCpaOGMT7Nd5ZawPnrQ0jY1pujA8NpWTbFfc6SuBG6ta0IBAJ1I4RGt96zpoo8xqcB1fZERjDZMC0h8ZzSqyGt3FWxy2JOtGNa95/GLNc7CTaJs4EkTJEpzXUNhUivOjgfwwOsozidMcC2SlNMEyzozV0pIc4/8AxX1RR6tJOMvU0+kzTyaoPyB20jhcaYSwDqgArpJlqDkygHrNur2w/svJow6hGWM1oKbkBNT1juFTkDpHJk4ujmEVJJchQOsZzVOgz1Tjpvh/au2GVPsKK4whquopWqkqC3HKp74S8rjjS9f/AEsqN37MHuCZuI+cTXvqYBOYs85D0hWnWGQ518nxBitW2SyMUdSrDIgihEW+JP8AQp470q/UL7PtKavS4WpkASFopqWNd5HqgRfM5MbCWOqCaHlENmhlzEN72Pihpo5j1o8hY9Cjx9D2R7Hj6HsjiUb5ChQozB5hl/t/3Vo+3m/zGiGrQbv64J7Wm0MqggzphFGFc5jHfAS1WSbKIDrhJ3VH4GFOElyg1OL4Y8hjrKIksMeA74I2G7S5o0wAch7KwUccnwiHNIbVqQ/IOIhVBYncBUnuET5NglK9DJmTAN7OBXicIplByRhQfNoE5dUeww+PSt8sVLOlwO3LsHOnAtOmy7OMqBsLue1VYYR2mvKDR+DBStZdsxNWleiGHnpM1gPLtk0kDEAMq5iLLIvtUlH5xuoOqg1Y8fH2w7/rRSEvqJ2U7abYufZSMLLPAALYQFZTnkVJNcqaHfpFPmzwcjqNPdF9m3jMnNimzMAUghCrzOlJrXqByB/xFdvS4LVapgaVZMGVCwwrjNTRitaKaUGXDOsJyYa3iNx5r+Yj27ZqalmS1BeqRidAynApIwOKE1U1GWo7NLh8GF79I2Bxmis+LccKnDir5wyUHhl5oju2bH220ypMt1MuWqqpRWDAdGoAoGfIVZ8q+aOMWXZbYsWSpSW4ZhRmLDERiU9XDMH0SKVGtd1CUcbi7QMsqlGmFLusio6mq+UuhXj2VgpKOFa4D5IJ6swaZ8DHPxJ8spmo8p2plxrOavgYaF2grh6Mg0pmtm4ckhjk2IUUiYbYvVoRUVG+vVzORH7phTrR0VukzB5E1WlsRxBDLXuLRGNnmDI5jETkzEULVOsymhPmxGvqyGbLRQ+B0ZXDa5rkRqNVJEckc2A/hauzrdKPOFf4k8rxUg/wGMrs94mQ4mLqvHRgRRlI4EEg9sa5t7fCfFCZq5oUoRQ1auHMbgalTSvlcox5JaNOyNZYOR+kf8e2C1NJLuHFJ2+xbNkLEwxWmZ+ketOQ/wADLxixTLSYF2W2gqAMgMgOW6HjMrFiMKRUnJtnk61kREm2uPbRA6aY5hR3O59pgbaLRHU14Hz3hE2PjEU2fE/ZqZV532P9eRAKa0GNi5YedOBNPmCa9k+QYVCXxr3QWWN45L0ZYZV4FRllu1iBNmVNTDs0gVXWhyrrr6uztiIzxsquTB34PSYbJhEw2xjmw0iZZpkL4sTaZ01RmZKy118ueQozBFOqJm8dsENkdm51umFZfVRfLmHyVru5tyjVrFs1YrMqjAJrIQccwAkMBQEbgaE6cYzusalUVyaXRY5R1S7NGdWGzsbRRFLBMSigJqUBCga1NAx45RCvLYK8bQZLJIOJGNS7KuVSQczXQxqdrt69JJYUpLZm0prLdBT78TFv0Hzqdo/GFShNxqi3FxUrv0KjI+D2a01Zk+YiL1CwUlmJlgZDKgzGsefCFsqLXKaZIT52QpoRrMGpl8yBUjmabzFvtU1mU0NTTLP2GJdz2hStAAACRQVyz31zDcecc8k1uwo44cI+VWMNMYt3wn3ILJb5iqKS5nzqcAHJxAdjA9xEU9jFlO1YtRp0cGFChRAYo8fQ9kex4+h7I45G+QoUKMweZxeV8hZ84U0mzB4O0Vm82R3aYACzahsxWm7hHd9k/GbR9tN/mtEMg8IbKdqhSgou0Nm1hdZSR0t6oP1KRybOTujpLvPAQu5dhnw9x9L9UfqhD67SL+y9kMLdnIQ8lz14QalkAaxj6bUoP1Z9UPrtcm9G8Fhhbi7PVD0u4V/NINSygNYiVJ21Qea47APfDs3buook2Yh40J9WIRHTZ5PzSHjs3L4+yCvKwf6R7Z9uGFcdonMN1Ay0/wDIwKvTa+0tMJlWmYEyoCTXQV476wal7KIdPwhz/o8cPZEOGVqiVPEnYKfa9zZ8PTzOmp5WdPKz9WWkRbs2rnLMBnWiYyUNQCdaZaU3xYTsgOB9UcnZEcPZHeHl2O8TFRCfa+WfPm+J98QJm0gLhulmYaeRTXXzq14eEFn2THD2RHmbL03GJaykJ4itXlbelYGrYa76mO0tGeQoBkBwEWm7NnlqwdeqVPjuMBrxusy2IgHjmviYayQfwoJXXbsgIPybRURSLK5UwesdqyiziydmIy4+6DbvEG0GPPjMMTZ8NbFRiRbQYGz4mT5kQJ7xWmWIIjTYI7Lt1532H+4s8Cphglsz5U/7D/cWeFQ/Ej7oPJ+HL2YZMww2WjktHJaNqzDUT0mHLFZWmzFlpmzGg/EnkNYjkxbth7B1WnkGvkpTXLyiO+g7jAtjYQtmk3XKl2WQtnk6KKs292OpPMwFtl4TJz4JNdaYhv44a5Ac46tloIkE16ztgB0yqanlkDB3ZeypJk9IQMRFRyG73xV2xRc+WWMsp5ZrDB0qtvyXoDbPsY7CsxhXnVj4mGrZslMljFLNf9OR8NDEy1Wu0zyeiYKoyqf+D6hA2xbTWizWhZFroVmGizBxJoK7iK5aAioiI5Mz3tewuPTdNJbKS/yt/wC/sNXdeTo2B/dXjluaC/xrAwmA5edzHHtHsryiJtXZB+kXIn27jEeyT8SAneNO3UQ1xWSOpBYMk4TeKbtrv5oA/DdZQ8iRPAzRihP7swV/9lHjGNtG0bbHpLtmqcygB9E4z8BGLQrTpVF+MtW4oUKFHBCjx9D2R7Hj6Hsjjkb5ChQozB5jl8r/ANzP+2m/zGhhZcewoNC2OS0iQqwoUMQDHVEOpHkKCBH0iSiwoUMiLkPKIflrChQxC2F7ClIKCZyhQoJgIRm8o4M3lChRyRAw8zlEaY3KFCgkiGMkwLvayhhWPYUTJbExdMqs+z0MPWdoUKKa2Zc5RK6SG5hjyFDbAI02IM0QoUKkMiRZkEtmtZ/2H+4s8KFC4fPH3QeT5H7MIExyTHsKNgxkcExrF2WYSpUuWPNUDtO895rChRA6ArV+gk/6v/los8s1s4p+zH/rChRXzfKvc7H/AHE1/iiDdNv+bpTQkeuv4xUtvJ+N7PK0LTAcXDML7TXuhQoZhitVhxk3hj+haL6mdQ9o9sDLv/Rr3+smFCg8fyCJf3T/ACr7g/aAf9lavs53qDe6MVhQoVk5NDFwKFChQsaKPH0PZHkKOORvsKFCjMHn/9k=", // Replace with your image URL
                      buttonText: "Learn More"
                    },
                    {
                      title: "Business Administration",
                      description: "Gain skills in management, finance, and entrepreneurship to thrive in the business world.",
                      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHPRv1YusWVpyNx0lIRbCW9FGL02N5Ot7dPQ&s", // Replace with your image URL
                      buttonText: "Learn More"
                    },
                    {
                      title: "Psychology",
                      description: "Understand human behavior and mental processes to make a difference in people's lives.",
                      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rzHdbOsWVUU26halqQwuUjpzIMLs-QAAxA&s", // Replace with your image URL
                      buttonText: "Learn More"
                    },
                    {
                      title: "Engineering",
                      description: "Apply principles of engineering and technology to solve real-world problems.",
                      imageUrl: "https://example.com/engineering.jpg", // Replace with your image URL
                      buttonText: "Learn More"
                    },
                    {
                      title: "Mathematics",
                      description: "Explore the beauty of numbers and their applications in various fields.",
                      imageUrl: "https://example.com/mathematics.jpg", // Replace with your image URL
                      buttonText: "Learn More"
                    },
                    {
                      title: "History",
                      description: "Delve into past events to understand present and future societal changes.",
                      imageUrl: "https://example.com/history.jpg", // Replace with your image URL
                      buttonText: "Learn More"
                    }
                  ].slice(carouselIndex * 3, carouselIndex * 3 + 3).map((program, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                      <div className="card text-center" style={{ border: "none", boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)", borderRadius: "10px", transition: "transform 0.3s" }}>
                        <img src={program.imageUrl} alt={program.title} className="card-img-top" style={{ borderRadius: "10px 10px 0 0", height: "200px", objectFit: "cover" }} />
                        <div className="card-body">
                          <h5 className="card-title" style={{ fontWeight: "bold", color: "#007bff" }}>{program.title}</h5>
                          <p className="card-text" style={{ color: "#495057" }}>{program.description}</p>
                          <button className="btn btn-primary" style={{ borderRadius: "25px", padding: "10px 20px" }}>{program.buttonText}</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <a className="carousel-control-prev" href="#programsCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#programsCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <style jsx>{`
  .card:hover {
    transform: translateY(-5px);
  }
`}</style>


      {/* Search Opportunity Section */}
      <div className="container-fluid search-oppurtunity mt-5">
        <div className="row">
          <div className="col-md-6 ps-0">
            <div className="img">
              <img className="fuuast-img w-100 rounded-1" src="https://wikitechlibrary.com/wp-content/uploads/2022/07/FUUIAST.webp" alt="Research" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-white Reseracher mt-5">
              <h6 className="mb-3">Research Opportunities</h6>
              <h3>Explore Research Projects</h3>
              <hr className="title-afterBreak" />
              Discover exciting research opportunities that can enrich your academic experience and contribute to the community.
              <button className="btn btn-primary my-4">Discover Research</button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="text-white Reseracher mt-5">
              <h6 className="mb-3">Research Opportunities</h6>
              <h3>Engage with Faculty</h3>
              <hr className="title-afterBreak" />
              Collaborate with faculty on impactful research initiatives and broaden your academic horizons. <br />
              <button className="btn btn-primary my-4 ">Join Research</button>
            </div>
          </div>
          <div className="col-md-6 pe-0">
            <div className="img">
              <img className="fuuast-img mt-5 w-100 rounded-1" src="https://wikitechlibrary.com/wp-content/uploads/2022/07/FUUIAST.webp" alt="Research" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 ps-0">
            <div className="img">
              <img className="fuuast-img-bottom w-100 mt-5 rounded-1" src="https://wikitechlibrary.com/wp-content/uploads/2022/07/FUUIAST.webp" alt="Research" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-white Reseracher mt-5">
              <h6 className="mb-3" >Research Opportunities</h6>
              <h3>Innovate and Inspire</h3>
              <hr className="title-afterBreak" />
              Participate in cutting-edge research that pushes the boundaries of knowledge and drives innovation.
              <br />
              <button className="btn btn-primary my-4">Get Involved</button>
            </div>
          </div>
        </div>
      </div>

      {/* News Sections */}
      <div className="container">
        <div className="news mt-5 p-4" style={{ backgroundColor: "#f8f9fa", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <h6 className="university-news text-primary">UNIVERSITY NEWS</h6>
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="work">University At Work</h2>
            </div>
            <div className="col-md-4 text-end">
              <a className="btn btn-outline-primary" href="/">View all News</a>
            </div>
          </div>

        </div>


        <div className="Article mt-5">
          <div className="row">
            <div className="col-md-6">
              <img className="news-img rounded" src="https://fuuastisb.edu.pk/Events/05-June-2024/01.jpeg" alt="University News" />
            </div>
            <div className="col-md-6 news-bg p-4" style={{ backgroundColor: "#e9ecef", borderRadius: "10px" }}>
              <div className="news-text">
                <h6 className="university-news">LATEST NEWS</h6>
                <span className="l-news">Stay updated with the latest developments and achievements at [University Name].</span>
                <div className="link mt-3">
                  <a className="article btn btn-primary" href="/">Read Article</a>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div className="container-fluid mt-5">
        <div className="faculty-spotlight-section mt-5">
          <h2 className="text-center mb-4">FACULTY SPOTLIGHT</h2>
          <p className="text-center mb-5">Meet Our Distinguished Faculty</p>

          <div id="facultyCarousel1" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {[
                {
                  name: "Dr. John Doe",
                  title: "Chairman",
                  description: "Leading the department with visionary guidance and strategic leadership.",
                  imageUrl: "https://fuuastisb.edu.pk/Economics/IhteshamPadda.jpeg",
                  buttonText: "Learn More"
                },
                {
                  name: "Dr. Jane Smith",
                  title: "Vice Chairman",
                  description: "Supporting academic initiatives and advancing research efforts.",
                  imageUrl: "https://fuuastisb.edu.pk/images/vc/VC.jpg",
                  buttonText: "Learn More"
                },
                {
                  name: "Prof. Michael Brown",
                  title: "Teacher",
                  description: "Inspiring students through engaging lectures and innovative teaching methods.",
                  imageUrl: "data:image/jpeg;base64,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",
                  buttonText: "Learn More"
                }
              ].map((faculty, index) => (
                <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                  <div className="text-center">
                    <img src={faculty.imageUrl} alt={faculty.name} className="rounded-circle" style={{ width: "150px", height: "150px", margin: "20px auto" }} />
                    <h5 className="mt-3">{faculty.name}</h5>
                    <h6 className="text-muted">{faculty.title}</h6>
                    <p>{faculty.description}</p>
                    <button className="btn btn-primary">{faculty.buttonText}</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Updated href attributes to point to the correct ID */}
            <a className="carousel-control-prev" href="#facultyCarousel1" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#facultyCarousel1" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="faculty-section">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="display-4" style={{ color: '#343a40' }}>Our Highlights</h2>
              <p className="lead" style={{ color: '#343a40' }}>Celebrating Our Students and Events</p>
            </div>
          </div>
          <div className="row">
            {[
              {
                title: "STUDENT HIGHLIGHTS",
                subtitle: "Celebrating Our Students",
                description: "Discover the remarkable achievements and stories of our talented student body.",
                buttonText: "View Highlights",
                imageUrl: "data:image/jpeg;base64,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" // Add relevant images
              },
              {
                title: "Events",
                subtitle: "Events Network",
                description: "Stay connected with fellow graduates and benefit from networking opportunities.",
                buttonText: "Join Now",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi5i0xAKazOxHsVWyuwugpMzk1sgogGZ2SrLGyqYczVDoP2dXzn5aSR-f7BUWLAcUVQ9U&usqp=CAU" // Add relevant images
              }
            ].map((item, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="card text-center" style={{ border: "none", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
                  <img src={item.imageUrl} alt={item.title} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
                  <div className="card-body">
                    <h6 className="text-uppercase font-weight-bold" style={{ color: '#343a40' }}>{item.title}</h6>
                    <h4 className="font-weight-bold">{item.subtitle}</h4>
                    <p className="text-muted">{item.description}</p>
                    <button className="btn btn-primary btn-lg">{item.buttonText}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#343a40" }}>Testimonials</h2>
        <p className="text-center mb-5" style={{ fontSize: "1.2rem", color: "#6c757d" }}>
          Hear from our students and alumni about their experiences and successes.
        </p>

        <div id="testimonialCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {[
              {
                name: "Alice Johnson",
                role: "Computer Science Graduate",
                testimonial: "The university provided me with a solid foundation in programming and critical thinking skills, which have been invaluable in my career.",
                imageUrl: "https://example.com/alice.jpg" // Replace with the actual image URL
              },
              {
                name: "Bob Smith",
                role: "Business Administration Alumnus",
                testimonial: "The business program taught me how to think strategically and led to a fantastic job right after graduation.",
                imageUrl: "https://example.com/bob.jpg" // Replace with the actual image URL
              },
              {
                name: "Emma Brown",
                role: "Psychology Student",
                testimonial: "The supportive faculty and engaging curriculum inspired me to pursue my passion for helping others.",
                imageUrl: "https://example.com/emma.jpg" // Replace with the actual image URL
              }
            ].map((testimonial, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                <div className="text-center">
                  <img src={testimonial.imageUrl} alt={testimonial.name} className="rounded-circle mb-3" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                  <h5 className="card-title" style={{ fontWeight: "bold", color: "#007bff" }}>{testimonial.name}</h5>
                  <h6 className="text-muted">{testimonial.role}</h6>
                  <p className="card-text" style={{ color: "#495057", fontSize: "1.1rem" }}>{testimonial.testimonial}</p>
                </div>
              </div>
            ))}
          </div>

          <a className="carousel-control-prev" href="#testimonialCarousel2" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#testimonialCarousel3" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>


    </div>
  );
}

export default HomePage;
