import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEX/wwAAAAD/xAB9VwDnrAD/xwD/yADeqgD1vAD/vwD/wQD/ygC+iQDfpAD8vADurgCzgACcbgDWnQBwTgD4twBdPwAvHQAyIACpeACDXAA+KQArGwBXOwDQmADxswDhpgBnSACjcwDGkABZPAAMAABsSgBFLgBNNAAVCgC2ggAjFQCCWgCPZQAfEQDqsgCldgAbDQCNYQBDKgBbEn+jAAAIK0lEQVR4nO2deX/aPAzHM4GzBwKEIy1QbkZL29Ft7ft/cU/CenAktuQjiffR72+T6IsTy5ZlJYB/XQEE/7aY0H8xof9iQv/FhP6LCf0XE/ovJvRfTOi/mNB/MaH/YkL/xYT+iwn9FxOaXZy0geLKCIeE7e8E/XJlhUNCaH4jaOTKjtoQNphQ2wwmNLg0EzKhJTOY0ODSTMiElsxgQoNLMyETWjKDCQ0uzYRMaMkMJsz/FeZHPhNC3BaIVv4SQvK8jkPl7xwQaj1vGr8KB6lFT6DqRuuEECx1Hjg6IcRHk9ZNRTdaJoRwOZolGk8cnTAc/bXpsR9Iu9EuIUDn+du3QUi1VoNQDD+tWseR5Nc2CSFa3h+b0Z9TMiG05yd2TSTdaJFQBP33ZiPEIH5hBpVQdM4Mu1mJogtYIwSxuvlst6AiUgmhNz63bDcpGlRtEYrg9+6r3bxFfeiIhNHvK9vmq/xB1Q4hhKv9WcMOsROJhJDkWbfJneJYIRStwUXDZ6LHIBKKaa55+25ON1ogBDF8uGo5iBwSim6RgZvrQdWcULQOeU1j2mNHIQRYF1r4dtWNpoRpB85ym9I8BolQbGU2DnrndzYkDJPXorYkj0EhhNab1Mj98KwbjQhBbMeFbfcUj0EhjPqF93zX4HRQNSEMk4as8RNhekoghORRaed4+DXF0SdMZ9k7aeM/BI9BIBS5A9ulDp9voy4hhPFIeRe8x8ATipX8f/3Q3eL9bdQkFNB/UTdvogcbAqH0zTjV9G83ahGmHXijbpwlGGHtRhOeLAuVul1kb6MOoWhPkO3RHgNLCLBX3/VL00RoEELU/YFtj/YYWMKwo77pqW4XkSASgmhvCD/oIwcbJOHVshBhcrIkNRdh93qWLdEO6TGQhGJDojtqPFH7zy9Ne5fLJJVecZ2II4QYMYCbaU96z49aoQYbHGGYvyysWPe47RMMYfGysFptMZ2IIQRAOeHy9dZGdA+GMJQuC6tUH7HGQBBCizSKlyqEx0AQhtiJVAWaqt9ENSEs86Ml9VBXiagmjFDLwqq0VnoMJSGsqoaQS+kxlIRRTT3Fh8aqNYaSUBbzqoVUm6bq91D0CuOWtVBDMQHH+MNoeFc1RqH2Q9UKAzcv7dV0PH2ctCx4i2OrvD2g6tX4VbgBTSXMNmKpC1Tnelgg+AixNkqUqAw9btQPKI0w282r0QR1pMpX0iFM38ZmTbrxeSscxLwzCfGEC+071W6AfEA1CNNJXPO+akBlQp0ZYTqodv5UyTfeKpMiDQmzHMEKu3HQQ7kII8KMsarZ+HolSxW0R5g+qssqAqizjjzd0yZh6jgWt2UDviakEcaQsPxF1Twv7copYTqNW5Q3G5+p08rtE2bdWNZs/HVJHUHtEKaDareMtfHDUJ/P+FSQaDvvxmdFwrxjwqwb52orDdRYao4wtgizRdV12rA1IVe5bgnTbmy6iqlOMOer3BNmi6q+i2lcA3G4qiTCQICDYNyD9LwKWjYIIXITiXvcBMZvoQ3CdDX10wVfJvJi0AWhCJ6eXQGmui8+k1MOIYSr4uR2Oxok9PNq1gjh+ryHA9128IE1y4QA23IWifOuwaNqsnqK0Tm1xjostT2H/go4ICXmmUp//q0bxQiH9Ew7M+0111B65/HFsop94Uasw6hDKKBTTTTxBbEhaoEwHWGqS8+4W5A9Bz2qX1pwJl/3TeKjSj1DCovKsxaIgX3a+cNoWZ4LLNZdhzIfpxCKoF+mC5ToB2H/Ak8Iolu2C5TogA5QoQnDpF45NbM+MoaDPW8hSppkEzQforoRRQhh0/UqUEuoWCqGUPQ2VbMU6HHSs5D1BWJRoxHmUnvlKT11jnAtXKBEI9Psy6jGHXiU6syFOkeYcHa0Cs1Vqezq9zCsd4qw8jgCYqRJ6pzofbCRQSuvhlGtxupjQZg8b6g8la1QHXW0GOXx46pBinSDOGOJmrVFNUqdPROmsgJuXtqup1NEVeDDrS3q6RTvUOfVsasnjUy9G0UJlnNpHAFEHQPGEkJCtWDWodVUmMbUEXuE23VzVTVimlCrRpDjzMiSX/jaJpQw8DzbY6BW/gBBCpRs7NbFSAnx9u76x2ifVm0T9KD9YLu2SfqcYlOfpu+xBa36NEEf+cJbr0+TlTdBpZR8bYLp1RgSuBU3vnQ05VTQAnHnk90hzTpRIDAbB/hatKR6bcp/t3G6Ga1dzUwEylkitvwOkRASeQ2X/cJSzT2ImvJ6ZntMQQwNwiB8kt32MrJnUnNPyNM8hq7OPUFQHBgeXSUSGtZNlJzMRdSK0CQsrkr3sL3e0zOsfQnhqmCSMSOVvKbWoM3dAN4NejlzROMKrQKecp0jpS4kfQ+4lfN6rPM3ns1r0ELu6SNl/NCIMMcp3m7D/NfCRqXkvNRVXAEsbcKr8om5D6g1wuPp4/Pzjur44YUZVEKIT9NJ1wW1vI8t7VQsz76JcNIOET+8+D05nyb8qkT7Ij0uZ6/q/KlzRMQPL35NzxiCjwPdh550g9LilwPCzzzWtfsvB2RO8XivG9VxOatff/jIRY7LIAzCQ/aAKhMF7H7BQwSdl5K+4JGtFO9+Is5zWv8KS/LzradhrVb2JSrvyv6XdIQGoGYGLS4C6e/XkLCX9veLVthLMyETWjKDCQ0uzYRMaMkMJjS4NBMyoSUzmNDg0kzIhJbMYEKDSzMhE1oygwkNLk0iHHlIGAT/UeTKCKeEQJEzI1wS1kJM6L+Y0H8xof9iQv/FhP6LCf0XE/ovJvRfTOi/mNB/MaH/YkL/xYT+C2ibCz7qfw2YikaIO9M7AAAAAElFTkSuQmCC"
                    alt="Texnomart"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Texnomart</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cupiditate libero pariatur est, eum exercitationem?
                </p>
                <div>
                  {/* <SiNodedotjs /> */}
                  {/* <SiExpress /> */}
                  {/* <SiMongodb /> */}
                  <FaReact />
                  {/* <SiMaterialui /> */}
                </div>
                <div>
                  <a
                    // href="https://store-rockstargames.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    // href="https://github.com/aman-638/store.rockstartgames.com-Frontend-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://marketing.uz/brend-goda-2022/uploads/works/covers/fbaf709e5b271d9f8c99afe898cf50b8.jpg"
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Sofia</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nobis illo odit necessitatibus nostrum error!
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    // href="https://sk-weather-app.netlify.app/weather-app.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    // href="https://github.com/Shreyasgkhakal100/Weather-App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="data:image/png;base64,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" alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Iticket</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod mollitia velit enim eum sit ipsa.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    // href="https://www.npmjs.com/package/apijs-mongo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View NPM Package
                    </span>
                  </a>
                  <a
                    // href="https://github.com/Shreyasgkhakal100/API.JS-Mongo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhMWFRUXGBcVGBgXFxcVFhgXFRcXFxcXFxcaHSggGBolHRcVITEhJSorLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAQADAQEAAAAAAAAAAAABAAIEBQYHA//EAD8QAAIBAgIHBAcGBQMFAAAAAAABAgMRBCEFEjFBUWHwBhORoQcicYGx4fEUIyUysrMzNXJzwYOS0TQ2QmOC/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAQABBAIDAAAAAAAAAAAAAREhAhIyQTGBQkNR/9oADAMBAAIRAxEAPwD51wBhfriCPY4NJl7zMkOt9CifkKMxRMI0uYXBsrAJGUTBpuLCwJgaYIBaKEguCINCYY3AbijMUQGlzC/iDY28AH2CYRPMDSZPlkFvkCZFbYJ+HAytpSRUb66yINfkxC6H9C65BqgsgjQfEGxsAsmZiyClciBorgIICYRoGVwSKNIkZFsGoQsCA0HxBjYilkwTADS8hMyQ3An5CjKRMI0t5Pn7gv8AIkiK0uuBRMLaMn0gG3s8yHU9pFRPcDC/zDaAryEyxuFT8hMJCEK5kDZWASMomUJMLEmBpkjJNAaArgQaIyNwF8yRlIkBpF8Qky1fqBojKZMDS+pPkZ1RiwrTBeRnaya9wRvrrMg10IXgNEFiTAQsUmVvEImTKLB7QqsIWEAJEQQhYgA0iQE2UViKxJkCFiZWAWTBMgpSH3GRCJ9MkA7LcAFewLECRFaXSFbDK22KTyAfd8CKz4+QlA35g0Nw4kEkXIPgauUZcRSAghWYWFsAIiRNgFhZEmUTRJEAGgaG5kBSIDRAWFIyKAVmFhbCwU7CsSZNhFqjexk0mFTRKIZ3DdyCN3EiCsW4e8kWZJgW0LeAyYZhDsJpEmTYUW4iA3CCxJHYYPQ1arDvFGMKV7d7VnCjSusnadWUVJrhG9jnR7IYqUHOgqWJjHOX2atSryj7YQlrN8kmTYuOhCx3mmsHhqFNUYynUxcZffvLuKdk1KjC2c5xlZOWy8XY4GiNEV8XUVLD0pVJ7bRtkuMpNpRXNtF3gcNIkdxpDs1XouabozlTTdSFKvSq1Kajtc6cZa6S3u1lvsfnoHQGJxspQwtLvHFJy9aEVFNtJtya4PYTYOrsRqpTcZOL/Mm4225p2aO5w/Zeu2ozdCjOVrU62Io0qr1tn3Upa8W+EkmW1HSFY52mdEYjCVO7xFKVOe1KVrNcYyTcZLmmOhND1sXVVKgoSqPZGVSFNuyberryWs7Ju0buyuN9q4N7E0c3TGi6uFrSoV0o1Iausk1JetFSVmtuUkWh9F1cVVjRoKMqktilOFO9ld6uvJaztd2V3ZN7hvscHVNXOZpvRFbB1ZUK8Upx1W0mpK0kms1yZw7gFvEkguKYQ3DV4e8b/MzmRWkkW0ot3JvIoLLq5DmQRMGjXSM3Iqt4iFzRRi3AUguNwi2mbeBtnbdj9GRxWOw9Cf5J1PWXGMU5yXvUWveNxXIo6Cx2Ni8S4OVNJLvasqdGkoxyUYObjFQWxKKsuR+uhsNicBisNiNW0e9hDvKc4VaUoyklOm6lOTjnFv1W777ZHdemTSbnjFhV6tHDwgowWUNaUVLWsssouEVws7bWeV7N6Snh8RTcLOM5whOEleFSDmvVnF5O21PanmrGJti/D1vpt0VCljYVYJR7+m5TSyvOErOXtacfC+87b0W02tE6Rlh/+p+9UbfnuqCdK3/05253Px9PX8fC/wBur+qB+focwPdQxGkalaVOjSUozhG1qihDvJOae1RUla1ndvO108fri/k+aYSu6coVKcnGUWpQktzWxrj8HfM+n+gNffYr+3S/VM8D2m0rDFYmpWp0IUIzd9SHtd5y3a7vnay82/fegT+Pi/7dL9UzfX41OnyfPKmLnSxM6lOWrNVKmrKybi25K6vseeT2p2as7HAkr3vtd2753vtbvtOTpB/e1P7k/wBTOMbiV9Y7Y0u97P4GrP1qlNULSecvWg4O72u+TfFxR5P0V/zXC+2r+xVPYdpP+2sL7MP8Tx/or/muF9tT9iqcp437avzGvSwvxbE2/wDT+xSON6NV+KYT+uX7VQ5PpZ/muJ/0f2KRxvRs/wAUwn9cv25mp4fSfk7D0wL8Uq/0Uv0I8VbwPa+mB/idX+il+hHi+rF6PGJ1fKSJoUybNAtxfsHZtC763CiIHErcdothco3frMg1UJFYt1wFIL8hTKiaC3P3k2V+WXD5ANrE1zDaibCqxztDaRlhsRSrws5U5qaTyvbJxb3XV1fmcC5olH0DtzRoaTqRxuCr0VOUIxq0K1WnQqxlC9pWqSSkrZNp29VWvfLyMsNTo1KH3sak1OMqrptSowSlFxjGa/PJJScpL1c0lezZ1bK/EkmcGvpfpl0hQxM8PUw+IoVYwjOElTq05STk4teone2Tz3HW+j/tPQo0MTgMY5RoYlSXeRTk6cqkO7ldK7s0o2aWTXPLzeitDOvRxVaM1F4anGq4at3OEpNTalf1dVK+x3vuO5j2Drd9gqLqRi8XCU3LVcu51KaqyjUV1dqMo71tM50ydtXnddXX7M1VJ91UoYiG6pTxFDVa5xnNSg+TWXFnqOyumaOiMPiJ97TrYusoxhTpSVWFJR1rSqVI+pe822ot5RVt9vIdntEfa8R3UaihDVnUlVlG8YUqcXJ1HG6dtmV//JH66S0KsNjJ4WvVUIwlaVZU5TWq460JqnF3aacck8r7XYt54pP66fPjfm9vvFI9F2j7O0MLTpyjjVWnVpU69OmsNUp69Kq2lPXcmo5Rk9V55cxj2bowoUauKxioSrw72nTjh5133d7RlKUZJQvuWfxNd0THse0WOw8tBUsLHFYaVanGi5QjXpyf3eclG0vWfJbd1zyfozqwp6Ro1qtWlSp09dylUqQpp61OcEo6zWs7yWSOp0doh1cNicQpWWGVBuGrrOff1HTVnf1bWvsd+Q6V0O6FHC1nLWWIhOajq2cNSWrZu71r3veysZkmWLvt6ft/9kxmPrToYmnGf3avUku4q2pQ9anWjdQa/K1OyvG6luDsVomGExVPGYzE4elTo60lGNelWqVJOEopQhSlJtes3xyWWeXhk7k3yL28Ym+3cdr9MfbcZWxFnGM5LVi7XUIRUI35tRu+DZ1Ji/E0XMBb6EkV/qSZUaM264CF+BFMVzK10SfIr2QBbn5kV+XkiKjVvkZsaaMthVYbdcgv4jYiM2GxX4bSiyia65hmaWRm/gApHN0TpOeGnr01Tk3FxtUpxqxs2ndRkmk8tvN8ThImRXouxulqVLE1ftT1aGIo16FVxi3ZVs7qEVxSSSWVz0lDtxRcMfOcmqzqV54P1W8q1JUYpu1oWjCm87bz5xfwHaS9EpK9N2U0vh8JQxcpwVWtVhDDwpSU1F0ZO9ZyqR2JrVVr39XgzPbTS9HGfZq1NalVUe6rU0ptRdKVqbU5fnvFvO7eSuebkyvxL286b6d52p0hTr/Y+7lfusDh8PO6cbVKbqa8c1mlrLNZZnZ47EYLGUMJ3mLeGq4ehHDzhLD1aynGm3qThKGWabyb38s/I2BvxJhr03ZPtE8Hhsb3dV069VYZUWoa38OrJ1M2nFepJ7eOWY9sO0P2yjgnKo6lenTqRrtx1fWlNOO5ReS3ZHmE/EbDtm6bw52mNL1MS4yqRpJxTS7ulGks3fNRSu/acBLML8Bi0UTWRZjsBPlkVEkTQrMmyKMxS65hfivYO0qCxW9xSZa3HaBu6IrERWBSK5J9byoGiuOwL+HECSyJrMWrk2iKyasGtxyG2/gVBxBbhbK4DYyatvDW4ZhUlmLWQJilYAzKKK/gW0ImthDsC/gFKQWdxtcmwM7VwN2M63HIbbyA48CW4r+IplRWMmrBrcAFLMnHIkyWSIqz4oguuL8yKjSRniaa8gbIo4cDVjKY23lGdiHeTkKYRSWQClYNYgktpSQlsCi5RRawvMIGsy3DJ8wUijVjPHgatv4GWyKuA2BMefEDKFLMnIU+ZUUlkF/HyFZBrfUKoonuHaTABigUhauEGdw3f8mmyUgNEViIrFyXFi31wLq5UEl4lreIhfxCqKy4E1nkhfLIX0yIw3wNAma4ZlVnZcNtjTJBFYynxN+8y2FVs9gyWXEUC55gGt4lFDcggaLWHq4JhVFFv2C1wyFkGN2RrqxJ/QfeBjZcdtsshfSJFRNGU+JrzJsAW3NFJe80umS2BRrPgIW5+SIIkvmCyNcAf1Css1bw6+RLyHO5BiL9xbXsNPnsFFGZIriuZPzCBImt5r4l8SKzf6FFD8SfIqM79gt+80wXLYBW8DKyub3oH5BWXnYbfIUPEDCfuLeafMV1wIjMkWt9BXMviARXiTNfEuuQGb9cCihXLbvJ8grKyZN+82wXkVDqLh8SLrb8iIuMqXzBZmn9BKMNbx1kaD4hGYotjNvkTIYzKRaopcB4FGE7XRN3yNv6gvIgNUIs3xB89gGdoyiaRLmUGsZWeZr4iFYeWY63yNB8SIIoNjNvkTKrEn4jqiuWwc7kGEyeZp+QlTGXH5EpGuIPn7grKzZSRtEuYQd4hK76+hBWZbjUuvAiCRdeZlbSIDT68B+ZEFYpmnvIgkUwhsIge0uvIKpEQrfy/wAmV1/tQkVWXtRoSCQLrwMx2siIVp9eBMiCil/kV15kRUgls8P8DHYiIHtLd1vZme4iEK0yIgpIiKj/2Q=="
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Asia watch</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit repellat, amet ullam provident veritatis quas?
                </p>
                <div>
                  <SiNodedotjs />
                  <SiReact />

                </div>
                <div>
                  <a
                    // href="https://drive-system.herokuapp.com/user/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      URL for the API
                    </span>
                  </a>
                  <a
                    // href="https://github.com/imbickydutta/file-system-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Gm"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Gm Uzbekistan</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eius vitae architecto, ipsam impedit maxime.
                </p>
                <div>
               
                  <SiReact />
                  {/* <SiMongodb /> */}
                  {/* <SiHtml5 /> */}
                  <DiCss3 />
                </div>
                <div>
                  <a
                    // href="https://uniqlo-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    // href="https://github.com/Shreyasgkhakal100/uniqlo-backend-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUPIzVfGgBO6p7Y_2U78Wb09P5B06waQ0pQ&s"
                    alt="clon"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>HyperX </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus unde sint illo, ad rem sapiente!
                </p>
                <div>
                  <DiCss3 />
                  <SiReact />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    // href="https://pulseplus-clone.netlify.app/landing_page.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    // href="https://github.com/Shreyasgkhakal100/www.pulseplus.in-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
