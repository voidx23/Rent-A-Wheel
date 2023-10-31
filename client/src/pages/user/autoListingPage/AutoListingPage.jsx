import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../../components/user/navBar/navBar';
import { selectClasses } from '@mui/material';

function AutoListingPage() {

  const location = useLocation();
  const { data } = location.state;

  // data

  console.log(data, "this is the data")
  const [searchInput, setSearchInput] = useState("");

  const [isCollapse1Open, setIsCollapse1Open] = useState(false);
  const [isCollapse2Open, setIsCollapse2Open] = useState(false);
  const [isCollapse3Open, setIsCollapse3Open] = useState(false);
  // const [selectedSeating, setSelectedSeating] = useState([]);
  // const [selectedTransmission, setSelectedTransmission] = useState([]);
  // const [selectedFuel, setSelectedFuel] = useState([]);
  const [filters, setFilters] = useState({
    seating: [],
    transmission: [],
    fuel: []
  });

  console.log(filters, "999999999");


  const filteredData = data.filter((car) => {
    const seatingArray = filters.seating;
    const transmissionArray = filters.transmission;
    // const fuelArray = filters.fuel;
    const seating = Object.values(seatingArray);
    const transmission = Object.values(transmissionArray);

    if (
      (Object.keys(seatingArray).length === 0 || seating.includes(car.seating)) &&
      (Object.keys(transmissionArray).length === 0 || transmission.includes(car.transmission))
      // (Object.keys(fuelArray).length === 0 || fuelArray.includes(car.fuel))
    ) {
      return true;
    }
    return false;
  });


  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter(item => item !== value)
        : [...prevFilters[filterType], value]
    }));
  };

  // const handleTransmissionChange = (filterType, value) => {
  //   setFilters(prevFilters => ({
  //     ...prevFilters,
  //     [filterType]: prevFilters[filterType].includes(value)
  //       ? prevFilters[filterType].filter(item => item !== value)
  //       : [...prevFilters[filterType], value]
  //   }));
  // };



  // const handleTransmissionChange = (value) => {
  //   const updatedFilters = { ...filters, transmission:[...filters.seating, value] };
  //   setFilters(updatedFilters);
  // };

  const toggleCollapse1 = () => {
    setIsCollapse1Open(!isCollapse1Open);
  };

  const toggleCollapse2 = () => {
    setIsCollapse2Open(!isCollapse2Open);
  };

  const toggleCollapse3 = () => {
    setIsCollapse3Open(!isCollapse3Open);
  };


  console.log(data, "this is the listing data");
  return (
    <div className='bg-[#F6F6F6]'>
      <Navbar />
      <div className="head bg-gray-800 h-[300px] text-[50px] text-slate-100 font-extrabold flex justify-center items-center">Auto Listings</div>
      <div>
        <div className='mx-20 '>
          <div className='h-[100px] flex justify-end items-end'><button className='border p-3 mb-3 '>Low to high</button></div>
          <div className="filter-car flex justify-between">
            <div className="fliter h-[500px] w-[400px] rounded-xl bg-white p-8 ">
              <p className='font-bold text-2xl mb-10'>What are you looking for?</p>
              <div className="flex items-center border border-gray-300 rounded-md p-2">
                <input type="text" className="flex-grow border-none outline-none p-1" placeholder="Search..." />
                <button className="bg-transparent border-none cursor-pointer ml-2">
                  <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
                </button>
              </div>


              <div className="bg-gray-100 p-4">
                <div className="max-w-md mx-auto">
                  <div className="card">
                    <article className="filter-group">
                      <header className="card-header">
                        <a onClick={toggleCollapse1} className="cursor-pointer">
                          <h6 className="title text-slate-800 font-bold text-xl">Seating capacity</h6>
                        </a>
                      </header>
                      <div className={`filter-content  ${isCollapse1Open ? 'h-auto' : 'h-0 overflow-hidden'}`}>
                        <div className="card-body">

                          <div className="mt-2  text-slate-600">
                            <label className="flex items-center ">
                              <input onChange={() => handleFilterChange('seating', '5 seater-hatchback')} value={"5 seater-hatchback"} type="checkbox" className="form-checkbox" />
                              <span className="ml-2 ">Hatchback (5 seater)</span>
                            </label>
                            <label className="flex items-center mt-2">
                              <input onChange={() => handleFilterChange('seating', '5 seater-sedan')} value={"5 seater-sedan"} type="checkbox" className="form-checkbox" />
                              <span className="ml-2">Sedan (5 seater)</span>
                            </label>
                            <label className="flex items-center mt-2">
                              <input onChange={() => handleFilterChange('seating', '7 seater')} value={"7 seater"} type="checkbox" className="form-checkbox" />
                              <span className="ml-2">SUV (7 seater)</span>
                            </label>
                          </div>
                        </div>

                      </div>
                    </article>


                    <article className="filter-group">
                      <header className="card-header">
                        <a onClick={toggleCollapse2} className="cursor-pointer">
                          <h6 className="title text-slate-800 font-bold text-xl">Transmission type </h6>
                        </a>
                      </header>
                      <div className={`filter-content  ${isCollapse2Open ? 'h-0 overflow-hidden' : 'h-auto'}`}>
                        <div className="card-body">
                          <div className="mt-2  text-slate-600">
                            <label className="flex items-center">
                              <input onChange={() => handleFilterChange('transmission', 'Automatic')} type="checkbox" className="form-checkbox" />
                              <span className="ml-2">Automatic</span>
                            </label>
                            <label className="flex items-center mt-2">
                              <input onChange={() => handleFilterChange('transmission', 'Manual')} type="checkbox" className="form-checkbox" />
                              <span className="ml-2">Manual</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="car-section flex w-[1300px] px-8 rounded-xl">
              {/* car car section started */}
              {filteredData.map((carItem, index) => (

                <div className='w-[410px] mx-3 h-auto bg-white rounded-xl'>
                  <Link to={`/detailed-view?carId=${carItem._id}`}>

                    <div className='p-5'>
                      <div className="image">
                        <img className='rounded-xl w-96 h-80' src={carItem.image} alt="" />
                      </div>
                      <div className='flex mt-5 justify-between p-2'>
                        <div>
                          <h1 className='font-Lalezar-Regular,Helvetica font-extrabold text-xl tracking-tighter'>{carItem.name}</h1>
                        </div>
                        <div>
                          <h1 className='font-Lalezar-Regular,Helvetica font-extrabold text-xl'><span className='text-red-600'>₹{carItem.rate}</span>/day</h1>
                        </div>
                      </div>
                      <div className='primary mx-2 mt-10 px-3'>
                        <div className='secodary-1 flex justify-around'>
                          <div className='section-1 flex items-center'>
                            <img width={30} height={30} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMUlEQVR4nO2YQQ6CQAxF5yC6URMvRugfTqZo4sUU1AtomrBAQkecGaGLvmQ2kv9DaWsy3znDMAy1eO/XRHQG8ORDRBcAe2060QzADcCrf4io4WdadCLdl/gw65nWWnQiXRslw4cWnQgRtZIht1qLTgTAKWB40KITqapqxws00s6r936jRRekLMvt0HCK2dy6IENDrToRKwDWgTRshKBshDDzcVYArAMvVSPklOpErABYB9KwEcKCI1SOXDD4t286vl3F6LIWELjiNaGXkXR8MZ9SBHIV8I98B8BxzgLaJeIR5CogFDQBuOfWpezcKF2w+vMoxOqqyJ0T4VRYymmKoljl1lHubLQXd9ecTfLhLxh6iRQdjf9zTd6dxUHC7qiAIndHDYjcHVX4yJ0zDMNwi/EG8mlhiQs7yZIAAAAASUVORK5CYII=" />
                            <h1 className='ml-2'>{carItem.transmission}</h1>
                          </div>
                          <div className='section-2 flex items-center'>
                            <img width={30} height={30} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEKElEQVR4nO1YS2hcVRi+Rayt0EV9VduqBbFqF4VCW9RNoYKK4EL0qqnKQGb4v+/cdCoBEXEhLmxR2ki0Gy1iwUULWsGFINVFcKNYCqHNokKoi+rKV19JnySRX88Nd/6cO5OZO5lJJB8cMjmP/3X+8z9uFC3ifwARuYvkDpIfAjgKYBTA3ySv6dDffk7XPgDQkyTJnd0W+jYArwI4TnKqlQHgGMldSqtjgjvn7vaWvtSq4IExrjdTqVTWzpngInKjt/jFNgo+ZW7kEoC3q9XqTW0V3jn3EMmTDZiPkNwP4CWSD6s10zX9LSKPOOde9ntGGtA6ISIPtkV4AM+THMth9CeA3XnM0n2hNT1Dcg/Jv3JoXwTwXCHhSfYBmMixlEaXdQ3O5yqQAsA6ANdzlJgAkLQsfI7gX5Ec8r8PFFWA5AG/b8jTDimSNO02ActrTHd+fYO/Ad2zqSnitcJv8jSU1gZPO7E34vc828yDrfF5H3meMMwH/fqhAgoc8jQGs/Mi8qSNdvp/pVJZX5dgHMdLA9HmMsntAUVXAnitVCota1WBUqm0TGkoLbsmIo8BuGKUGNZwnkuQ5JvW/0TkhahLANATeA+v18uw4+bAR1GXAeBjI9NYX1/f6hkbtTwIRIDvnXMbuyJ5FEXlcnlVJuJlx/s1G6vV6u22tkkjgf+7P+Snc404jpcC+DngGXoLt05v1BrHbPg1SZJ7SR5Mw6k+tg7JvcQ59zjJd7RM1/CqwpL8xRh4Z1aB43kPRUQ2AzhcJNrMBr29vSt88jylfm/5Aeg3Rv4p24xMZhYm9UFHHYKI3AfgXa2JfOzfkfceTHKd/Lcp8p1U1vrHOuUmAL7OuOgJkg/UO0TyB3MLL4aiz0An3MTw/KS/v395o/Mk95pzg+pbR2doVRC+F/iC5AWSfwD4zJce52w0IflKgcT2jU6ezk4657a0QfhgjW9cdUTrrmZoA9hqaIxGllnRvtRbvpHwn4rIzc3S9tVCTUOlDK/WY9aCAhcaKFBqkt5UHUNciQJZbi4VONcCvak6Y1z96ox5A4VyAMkv61jsSBHalcyHAk/vjCowbCa3FmSyPucRa6K6vwht59wWI+uwWuxbM9lThIlXYi2AzwGc9+NIUeEV2psYWb9TBd4zk/uieQrOTGR7Vaung0XSPARNKQHgmbS3nehWMTdbAFhj5SR5R7r4Y7fL6UCzf1h5p3Paj9hMPn2AZO88amiiVFjP+6CI3GPDPck3pg9oWgdwtk5LOdjJltI5t1J5GhlqMrD2MTWHtFEOxO6h9ItZN4D/vgCGmvqZnzTL5fItAH43H1YL54SiAPCUqdfG9EEHN6dvQf3NObetDbVKwxHNAs65R0n+ZgNMCEsAvNWMv3dCgcw3ooE4jm+I2olOKTBnWFSg21jwN7CIRUQLG/8Au8AcDSXReoQAAAAASUVORK5CYII=" />
                            <h1 className='ml-2'>{carItem.milege}</h1>
                          </div>
                          <div className='section-3 flex items-center'>
                            <img width={30} height={30} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADdklEQVR4nO2cu27UQBSGh4LwCFwkJC7vgICCW0dDt0+QaP5/NooUEsSLUEBoKClSIBrEXaIBIegQF/ECSBAKQkRCgRaNcESysjdrZz3jmfyfNJ3lPWc+z/Hu+HiNEUIIIYQQQgghhBBCCCHSwzl3keRtkh9JrpEctDzW/GcBWAJwwexVrLUnATwLMOGDUQPAk5mZmeNmL+GcOwtgJfbk8//4Zq09Y/YCAI4B+NqBSR8MrYQVvypN7pB8GnuyWS3huckZkpdiTzJ3lpDvjbn4tlOW+DrJ+X6/f6jtGKy1hwFcLT6zLJZbI+K/QnK51+tNmRQB8Kki6fnQsVhrFypWwIcRk/+7OOZ+khIA/CxLOsSVP8z09PTBiothdfhYkpcBbAyJejA3N3fApERV3e1yPCyZ/GQlJCpgeYebdjrlKEUBvV5vCsC9HSSksRJSFJCVhFQFZCMhZQFZSEhdQPISchCQtIRcBCQrIScBmxJIvk7md0JOApxzR/0VPmryOychFwEATtV9ogfgrjFmn4lJnYBjDjMC//yY5PeG5140MclBAIBHTc/rd4P9LqyJReoCOIEnegCuh5317QmkLuBOxaRu+Ac8/mmbH77UVG1hk3wRdta3J5C6gM/j1nYA1ypkfTGxSF0AgF9lx/urfvjYYiWUCfhjYlE34a7FQ3J1XAGzs7NHupZv8gJQ3VQwdgmSgN0JWKooK/6GuzjmTVgrYJO6E1R0crd2j2mdrgXEBvGQfCwBEQVMornYxKJrAbFhPL6V3be0S0DEC6LYlGtUjkwsuhYQJxCPc+68b+j1PaV+s60Y70je6Fq+WQpIKd/OBUQJkICgpLICWD3WALwC0B/nGW/X8u1cQNzFd3kAb8s24cY5f7gMMxbAf+ONtXZ/3fOHzTJvAQOSru75w2aZv4CXdc8fNsv8BazWPX/YLDscEGvG0/bxrdO1gCgBEhAUrQCqBG1FJUglKCwqQVQJ2opKkEpQWFSCqBK0FZUglaCw5Nod3S/5w6mq7mgAP0wscu2OttYu1HhBo/Qv0YKQa3c0yfUaryjdNLGYwN77IMRoszvaWnvOxCJ1Abvtjgbw0MQkBwFo2B3t36x3zp0wMclBQJPu6ELYaRObXATU6Y72b9b7VWO6QE4CRnVHk3zvv+1EveEKIYQQQgghhBBCCCGEEKYxfwHz583ZVxb0CQAAAABJRU5ErkJggg==" />
                            <h1 className='ml-2'>{carItem.fuel}</h1>
                          </div>
                        </div>
                        <div className='secondary-2 flex justify-around mt-4'>
                          <div className="section-4 flex items-center">
                            <img width={30} height={30} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE50lEQVR4nO2dXYscRRSGa/1Eo2IuEv+A3wYxRuJfEL2eK+dqd6n3rYZms8aoqDi5DX6gm4j+A0VEEL1xd1WC/8Eogh8BYQWjklVvREeO2wO66arpGbu7qqfPAweW3Z2uc+qtOl3dU33aGEVRFEVRFKUFRqPRVSl29ChRv2pjfX39BgDnSP5S2Fn5nfrVEiRfJTneZ6/EFiBVv2qH5M7+QAH8oH61J8C4zExkUvWrN4EyUb/mhuRdzrmnSW6TvEDyV1+QbMEA/A7g3ZWVlds8/oY+L75fALAF4CmJzaSKtfYhAB/H7GyG7bMyv+c4zrZz7phJBWvttcXy8q8EOnkcsizLbt/v/5zHkljPjkaja0xMnHMHAXwSu2PZvgD/mMx46YOYI78znc/6UtAVIkhftC5AkXbGHbDfALxD8nATAhS20foJd0rO/5rkCQD3DofDA6FATWRCfonvEgOAdZLfBGbBn9baB1tzOrTaAfDaYDC4ruQzP5f8708mMlX9kphkpAfi3mrFYVkLhzp/xpS1YSIzq1+y+gnEf0fjDhcXWaVpp2zkT5A7nyTflJxc2Bup3A2dxa88z68PpKNTjTssU83T+ImKh1gqLDUq+2WtfcLTB5uNewngy7LGnXP3mJ6QZdl9nhT0ReONA9gta3yy2ukDw+HwgEeA3cYbT3U52TbR+kEF2EMFiExyAqhRBWACA0FnAFWA6KOQOgPidwQ1BcXvDPbpHGB6BlWAuKgAkVEBIqMCREYFiIwKEBkVIDIqQGRUgB4LcGl/owB+ND2DEQV4uUSAl0zPYCwBio1JIsIlGfnS+aENWYsK9Z5YXFSAyKgAkVEBIqMCLLoAAB6VBzF8e0G7aNiLZVtiS1oAAKdjdxabt1GSAjjnHkugc8ZtmLX2keQESPxp93Gd9n+e62pSgIXJ+Zxul5MTIIFOGbdpnRHAdBx2RQAp71J24CzLbjIdBp7UOk9ceZ7f0qQAF8sO7Jy733QYAF/VFVeWZQ80mYI2PQd/1nQY+B+vnTkuks83OQNe8Bx8p8tpiOTJOuJaXl6+WYoNNiaAtfZuXyEOAG8l+pD1VFZXV++sIa4lkm83sar6DyQ/9TUgznZ1JpB8b964ZORP6/zaBABwXEqwBBraAfAcyaNdEoPkEQB/VI1LTH6WnB9KO7ULIEjlkyoNpmQALgJYmyLCqSZ9qE0AKcNF8nzsTuUc5pwbBkJbknSTvACCTMGO1YUbV7nJNhgMrpayNMkLMNmGIltPppwTOnmXE8BK2UazCna5NQEmWGsfDlzMJGUAHq8aV57nh0i+WOUkW5Q3kz1Rh1sXYEJI/QTsO2ttPk9csrlMvqqUb8oAvA/g+8I+JHlG/jappFWsjkpnholVsEkqKZqeQPJIzIJNvjT0jOkJ9NzWAPBR440XVcR90/9Gs+Dke4uSbz0CPBm1bKUs7cyCg0DF4FbKVgrFuwF8Irwuo8Qs5sg/F4i7+YqJE6R+/rTSxVLaUaoLdjktDfeK88kJ96Qv7RQjX66RjrbqXKiCbN8MgYrBjSEvL5iSivpi56M9oFK8wKE3G7l4pW2vra3damJSzISNLrzChDWZ5HxJO9FfYfJv5IQL4IMedP5Wq+8KmBVZCxdfemwWr4Dq7FZHALsAPpcrXLnIam2dryiKoiiKoiiKoiiKophF5G9xcc7nQ53LlAAAAABJRU5ErkJggg==" />
                            <h1 className='ml-2'>{carItem.year}</h1>
                          </div>
                          <div className="section-5 flex items-center">
                            <img width={30} height={30} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAWRElEQVR4nO1dC5hdVXW+0/poKdXaWlpLrZXWUoFqoUofVmorLaatta1EfERSk/GsfW46ecijlganhaIClYdNpQpVEDSaGEAUAQkpwcibBvJAEkJCwtsgj4SQQOKk33/uWjf/XbP3OefOTGZGnPV954Pcs885e6+199pr/WutPY3GBE3QBE3Qjz41m83fDSEsE5HHReRbWZYdZvdE5NdF5HgRObwxzinLst8RkWNnzZr1c/TbYSGEK0IIPxCRJSGEQxvjibIsO0JEtoYQdtO1K4RwHpgeQnjUfhORU/v7+1/UGGfU39//ohDCx0Xkh+iriNytk+o8HQuP7RmMuTEeKM/zP0GHtNOfnT59+i+JyCdEZIfr9OoQwvP6/9/JsuzXGuOEms3ma0IIN2rfnte+ct+3Y+LMmDHjF/DfcSMEEXkbMf/sRqPRQ/f+jgbwv1OmTPmZEMIfhBA2aPsn0GZMB9BoNEII7xaRJ7VP96OP2tel1v88z/+WnxGRfx1zIYQQ/iyEsE07cqa7d4iIfF8HdV2WZfvYvTzPXxFCuNQGJyLzJk+e/JOj3f8sy16s6sX6cRn6ZvdZCBgL9oZxI4Qsy95OzD89wvzHtOPXMvOJekIIM01Nicg/jF7v2/08Sb+NPszk1ZsSAsY25kLI8/xIY76IfJLvNZvNg435IYRvz5kz56fL9K6IbNK2eWOUCatWx7AJVlqqnRPCY2MqBBH5cxF5NsZ8ETnIrB0R2Skib6zY9DZox5f29fW9dK92PN6HX1adjz5sKBMCzFCyjsZGCHme/wUx/xPu3uvJ1Cw2ZdjMsJD8ezBQ2ojXYIY1xoiyLPsN+C1lQgBDMRbt7yMmBKz2URNCCOEomGL6gY975lvHMJthqoUQvmL6Nc/zKTHm6zUgIrMaY0QiIugD9adDCCLyATKnz5k6depPhRAW6b8fxarf60LIsuwdKeZnWfbbzHyazT1YJcbkEEK/Y/5SCCa03jsmQiDm4/tzyOwshBBCOFnv78qyrM9ZT6MjhBDCJGO+iJzm7h0YQng4wnxu00vOl1lNS5vN5r7OlB1QS2TUmZ9lWcBvzvZ/hpj4Tv/8qAhBRP6Slt+/e+aLyENlzKe202iJLzPmG+V5/qcmBJ5po8l8I++AYQKl3uOFAFU8YkJwaqfDzheR14UQHjRIYdq0aT+bek9vb++vhhDW0YA25nl+QOR7f6xY0l4VAhiq1gwEMCPSj30UbLP+PpXn+ZtT74MDKSLzUxtznuf/ZKsfE61WJ7HkyEE6tYT5pTMfzBeRe7XtCr2S1obsgTWizNmbMz8y+7m/PwAoV7ESCs8e+yH2xSGvhBDC34QQntOXncL3ms3mb9Zlfp7nr2bm9/X1/SIuEbmrrhBEpNkYReaLyPU67rusvyYEmKp5nr+hjhCwLw5JCCLyrgrmP1CX+aR2ts2YMeNX7F4dIeR70NUREcJQmG/30HcyHjbvNSEA7TPmhxD+LeKsbOqW+eY5YqNC54YqhDAMmGI4zOdNlsZSWwhQR7U2ZsALZiqigWPEAXWZD3xfRO4jU/Ngsvs7hJBl2StJCGtj71UP9BkMPmYKVhHUqW24MeYrIHiVMR99SjB/K1SjiJw/hJVQaqIWG3wI4XuxDRfMh9UyROYXpqZzvgYJIewJfByXAv4UV3qir6/vZSX89v15OWH8c1JxAP326jLmhxDeit/7+/t/QkQuNGS0GyFEYItT9N6NDVM96LQ16O3tfS0x/2Fvu9dhPn0sKYQ8zz+kv38h9f4Qwqe1zexUm0ifPqKMWpJqA8cSbdCHhG2/BeZxxOz8Uh0hTJ8+/ecpWNUB4CHerKrxKXTkam10vDGMUEILVvxzCaq5PsX8lBAmT578EgxW9NtgWGog6Lg+9+1Um8j3rq2KM4jIdG1ztfWHmS8ib0nFjkVkQZkQdLV83fGwHdSxFVBMEA2aD6jE/5AYtUKhCIMK3lvCfFyTKpjCQlhHm/WaRNCmTWr+bqsDW6ONWS4wIFLtFFhbHenP03me/1HZNzRLYldKCMDM9B7U59Ec1FGDp3By8zz/K2POfLfbF7Y77uEB/X27LUnG8yn6tdUv2YRnXGx8ei3Gby5IszyEcBE/JyJf1A4PgrcTm3cxWPeOG0IIt7C+F5H9kUJjiCgyIcrUCqWtFOFWCky1hSAi76P3SQLiwL3vssQm0c0286mjc8gCOJJRTUARZCFsqZo9IMRemRG2l9CKWtwggiqxgWK/qbgsFv1N945bYxaPfvvlWZa9qlFBjvmX4hmz5vT3qRQzOYOfjQhhEs+6R1LMpwHMYwkysAadh43UljAyCxpdUN7ynIuNHANCTCEinN1dXifzOzRd5u6UEIbA/BdHTGqb3V8DT/w7nBCWQg0yYLQ2xfyIV1g4URCesxAuTnp79QC7Fak+oH/QqdCbWIVQR3me/55er1ef5Y2mmxHBS4QhuxZCivkxAUBdewcs4vwVq7FwMjXaVTDNOw3ccfMXVIK2qdyH2RtDB/V9pamI0tLBHZhRqq1F2coGp5tjwYgUc7sVgkLvUeY7rx5Gy+VVMWZMZHpfC+7GpqcdWuktEl665pC5TIF7eSPVFL+Fdi+V8wPmhxDW1mG+9vECZWxyo6fJ9FzZuzAms4CqhBBCuFnbzS9jPv7tTNlBQtAJatDH/7WtOmWomWQX0Mf3E5FVzPyEPlvLoBvsalMrMatCZ8GauswHichNaA8nMdUGAJitAMz04QpB2+D+Kp5IjJT6/pcJgez/rb29vb/V8THFbsys+oBKeCXptsJRY3IrYY2pI3WyzDs+0DEJlsM9JRbX/j5JCnpe2z9YlkWHe+bBi8iJfA9QhleJurpXpYSgWXwDupJfUsV8GuMxvFdCCEhmo9SWY6MDIHNvK3XsHkMUQwgnVAgBHvQMeK368ZtL9pIVEeYbejnbbXK2WuammE/vmEU2ejuNXEQ+HwMcq4SAlEVKKP5IldrMsuzvCdz8IQnBUlq+WDWAoqOsdoAmUvpGf0wIInKNM8XuY3Xh9pIy5g/AeyTmm569ozDbKkhN4is8cgnrKYX6qqpdGROCptnc5kzcG6uYH0GEC1VdFsJlrKMJE4ldfyeE02MDB+OQMafPvowHSHtMKfMzhY4d8zd0k87OOD8Lwc3O2kKASlW1chICVzEbP8L8fcmHwZ5wpVfHwwlq4yPnxTriyYX27vabY4gEyp2FsbFs402RBtiv0+8+gX3EVgLFvD/ZTV9LvsXMX1Y5y0dKCHC8yqpdhst8Ebl/KMwfrhDo+5VCcMwvzRIZMWJ1BHw8JQSqOlnt1Q42yFCidrCHjEQVjUs1iaojdiYjQri15N1RtTMq5ITwNXZSHC6/OgZ0aUTsSiRu2b9J7axLMV8TBObiWbXQHlDdDS90JjuFsZXghPAOEflMDObW/t2CvaQO80c9yVjDfrfTDr9wqMV3mWO+n5EUIjVXv+xChO8CrzogBKCsXghD7C8zf/2oznxKVS9SE0mHozOXd6sDs0610wFrGMGqokw92PeXIECkQNwBWZa9Cc5jCOGrpNsf8dloKBihaNmgipeaY59CzLfrqlErOoRHTNGguzSKNo1KOZEJcDYyCapWRGiZfqXMRziUBvoFhjxihE2bnKfnYkIwRzGWThgjdTYnQdXqeweAImsu1UZKYxyEwI4oWahNr3OYwerocIjSsgquAhMRqLF9ApABlrHsSXlZqxCE/95MW2U+tQQzDrMRuaR5nk92HixSTvr12Sc9k3UlFI6jFmi8lyEOMFxX+WmIXLkZvxmrzdpC/VCgHiHI6SPJc2bGCSlmEA4zjRK8Uvp5I6mT3YrAviqx1AvVhtnmZvg3XGGFDf5/OJhDQaR1PsijseMCtTWVhXJaNZu9irELv78/UtDXo0V/A8qfY0aO83usBXPABiXOhhD+mgA2GxDwm4U6OyynlK/tWEWxPUNDpG3Hhn4/lEqKkCp5gXreV1H/1lugCAAaRdqWRCy1Hq0T/q5fuZrVMFstrsXu/q2xrGmrvMREq4qPd8P8V1IhxpkRfPs0mo1brK05PUa6WUKQxyJalkq0Cq1ibiuQaAfiFea90/rhTUdEwwg6v9OYjTgtMe78knHCVD0oYTK/0yARMj528sqkfnzG2naTTJYkHD+gH1xukCyBXgt5g1QH5hsaOGkf1lGX8la9mc1wfPMhW+5q5RSOX+p5jXYV0aY8zzP8pkkD7WMTynKQUkQCuEI35NNp0p3HKkk3eYszfLYxHNLqx126vDtOCAkhnKUd2GXOFAjZCMqAZGFDST3BJjI1iygUfW9RVUhSv/8xfbbtQEGN0UTZ1W2uqabt451fd79tj1UQZVn2+1Rf1pEl3RWFED6nH/gK/w6rw8wxtgh44+PqyCqa3krjs1mDvKCP6v//B/XlDmRcVL0L1otZPz6ebOFFzXxL1jF70r0Az50VWRm7lNlHuWcu95OoK9KlW+S48DkJasIVqYsicq5/Djpe711Y5ztZy0M1zGidBm1megEghoqVUYXAmrrARkrPXmzjoNWwsS7aqd/eHbNu6PSUDQ6+f5NZTt2mwBQE29hmZMQRK/RzLKUQEIVmRDzLh1/EKGttrFeaGWiphJS5/GXqzyW6skoTv1Q/4303UZ8LHAhOnCK0FiS5uew4BRC+ZysqMd52+FVE/tH1pVjVQ6p7s0wJqAP+3YIWZS+lJK1oajiZgBeZF8l1WAq4FaambXCUcnh9ysPW1bNF2xUOEWYlVBdv6HqgyNOkXntKxlIIHqo11UZEPqzvWp3Yj64p4UPypZav81Ya4MFm53rHxj37Fv3wPanBQb0E9QciOZ895ldwlrJZWIAaPLyteJAlEawwi4020At9GS5BKh3RMRdGNWwpuWfA3KSE23YVqNZBF9mCdYJXbULsVS2fXQyzKgTd4RylyAIxyAZIedWhZWFFD20iVXddAoHFKVZXa+LubRQkutdgDQ2TLtd+HFGyucKYeF+kD/8yKJE2Pd7CWWOjRPtb9Ksra0jLUQuwyv1+hnb4nKp3kLAWuo5OpeD7h1PPK8Zyv9etmnM0FxEu51njQI0zecLocQN4/ls1LL3tnNOqsXEziwE/lFII4VMx3phfg3TKRl2yHVxVCL+sKEyIeYAJKwp69nlDMDUUuFM7elKNQR2FGaQ4T8cMVUDvMC1jOtznC6lehpAfL6sT0E10CZUTvcYdufYoO6ApshXrq30ojeWDjbpEO/8q95GLuykXMp8Am5G+c1vKfE0RPFpaMWfzcZIx0oP1zHvfUSdJWP2Qdr4PJg/hPx1OVoo0H2qQp06ZFvVRUrWXYypoXiz1O0V6iJMhjXbmzpfAxG5wkryFjJp1g3NJz9WZv79aOfurA/afsKi03f3wSGu8vkfV2oGk1m5Uge+MRecSYzWL5/P8u52j1I1jWqQP2ibJS5tS2S+p+y6FeKPwtLSOC1sAkK7qPZp+viByhufuSAzirDIrTc3Qebqht09GscpKuhbVHSdph+McRG/97fCUK8lmEutP4Dv6svV13qH7AMeNC89Qj6zc4Rh3e53olNaazYYw8Iy+/2at0pkGdVIypv0oa86+u0P7Y3B2ZXFi4t1FMIqjYtpXe193SVmWWWaoIpl1j9dBO7WOzHKCAGmcw5sl3tXbKoc9zjqvOPy7uupo/fEcTrA6olofU4H30Gw9VKN+pu6eTVVLRt5dOJTsWdNRPVu6PprTTDgEumN4N5Zc6lnNKjZ3/46q5KqshcXPo42zju6uTaq+rCji8rJVQrHqa2JeeoysiFChaX7PV7stseVOv8G8OC7i1s0KZuFOmKuJDlnw+rZuUjakFd3Ccw+OVIYZO2PwSerORF0Rdu7DXSXJZ4eaqcygpeanPhnDiGqT6W9v90OdGPbhrRkrE9IihI4sBw12T9HzEnKf4aBBnmVlvga8aJiZsQvPeAYTqPiYBwe1yv9EtZ5O8IkBysQCaIvFwTG5KN3+U7FqffaDuiaKQj3EqeGqMiz8t5j1HuXhnxrBauyYM7u2+Wp2TXMpHCCPn2iRxaDNki8AebFJ5L1uHFEQMQSe9udEwws2Ver6uQ/lGN3LK11N44c8ots1acz3bo/N0yZrZwjdZrOdKs5f56whi6Wu0hVwKVUVdrjpNqtiVpFWSGaxC8Cba/sKUw88+3UyFB65AnxzSedv52JFxcWKo/kt+UqtG4thPOyPYbOUGI2IdZw53TXp2T2WbnFEpNbLCqABO3xUB/y4e8eHqLDhpZGaqW8mKuPbB2kMhawA3YNphv94Q8JOQ4lspga0vUeBxMJE1wl4iF/BBLd8bjj95w78l33QWzQahP5v5yDdGTun2Z9CKGonw2uNnWQy3AP8qORqfqzgL7LyDD6+wf1ucQse4yJvTan1ZMGZTVWwSW3SZWi5M+sTKYQHURz0LnfvxFh5k2jcAP5CYpMf1qHetAFf5r57WWyF0UrtiIFT7XMhHK/qfK2ZJqC14ygjQirdNZS7f1jCdMPy3MIbqB57ttM2OdzT6vNVsYAIHfWyucbZEGXXIwlU92izjJBApabq2wi38X+wwbz5d8d4o0f8WP3bwF47jl+lvJxc+Fk+4kVRqw4PEurEpxOGPRDEvs6JKzzRkbxcQKSHsBvfn/MjuUaYPN+P+RBgtoU3df9LxjhGhDT8Zh5eEbTXqJYlUL0n5kGDFMG8Xs2/zbC/2cnjoA8iYbAuhntRTPfCiIWH4sDvYA9SY2JaZEIVZ2ADAXBjebPlQJERMkg17TVSnGMzdWAl8BU18ZZrCnfrQKKalLfAvudSocyhECrSVeAD3eJM+ncDdmjc+tV6HMEx/uwf/JvN7lEj7PIKH5hZtttZC4POXUuRtHI7H6tVzNwlWWxXTyo8sgsoxsC7hzWw4lXoeo10JbMqRoU0X7JXT8PiI20KiwArI1VD1Ww299U4g6X5LavK1RkCIQXmyypc6PNTUliTJp4dzwnCfjyajX10rC5uzEndcMCz70cIkeoFntFk3rmqe09STL8dXNf/n53ydIdzwaSlIHvxLaw0GBJ6HxkSF3FysFpFizXF/mRk3Y1KGepIkp56uLAqkhXG1wU44twRSS8fL6RZax9U+MEScW9nNJNmp/1mONTV1GYR+Qj2W2EMwLSkZ28wL5vaWVIAo6i304qYr+k0+zVeyKTQxe7IeQ2FAHw7Tie3o2vAOPvNmMiwr6oVvO8KalcAgomjhNvtXvA0IYAxpgkBjDFNCGCMaUIAY0wTAhjnAhBNuLJUkpgVpPFkS8zaVmIFPUXtitpj/uaEFURUAiXHBDDoSghg0MXfnBAAkTHIjiQ2pyvhB+DU3sm4LAzIAqAC7Y0ERxQHa/A3f1wF8Gmf+t3XOruhCPT4dlxFY6nzfCSmlZ/ykTEUl7iFfisSCDjJis76b9cAv+CJitq+hyC/Mr8/Ut1YtEOUDQFwLflZ4CNXVBR4BtBMrdhf4jMTLDiDfFSkpOvJ8WtiaTcvaOKMs9B5DXB2cUm7bRxiRO5m7IQTDaYc4lNsYu2Gnb/zo0Z6NMEChaARM7gpduARt9Ps6WtjCQH6176tshPRr5Wxv9+of2SB6wAe6DZyN0ElBPVTlY+DeDDOnNDah7GNZk3QBDV+nOn/AdfsA6Esh9r7AAAAAElFTkSuQmCC" />
                            <h1 className='ml-2'>+{carItem.engine}CC</h1>
                          </div>
                          <div className="section-6 flex items-center">
                            <img width={30} height={30} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFeklEQVR4nO1aaahUZRj+rlZYWVGUJe222G5GZZpKUn9aiMIGI29dcqb3eb5Dt7qF4Z+cijTKH7aopbSQLdgKZRYZtJCEPxIrCXJpNaLFbCWz0BsPvlemy5xxsjh3OOc+8HJn5pw7c97ne793/ULoRz+ahpntE4oKklcC2ELynhBCWygaADxHslsC4LJQJFSr1QEkv68hYE4oEgCM6FHeCXg4FAkkbyg0AQCeqSWA5F2hSIgxlkiuc+XXmNlhoYjo7OzcWw4xFA2VSuVIku8CAMmTQtFQrVZ3MbM9SqXSbvobCog2knNJ/ikBMKNQ2aCZje0VBSTTQlEA4Ow6BGwmOTwUAWa2K8mf6pCwNBQFJJ+vQ4CywgtkIQC+TJLkxJBXACinELCyVCoNBLCK5AshrwBwMMmt9UiIMV4C4CoAf+m+kFeQfD/FCt6SnwDwOclbQl5BcmY9AiRJkpxKcqpIyG26THJcGgEA5pvZ/gD+IHlRyCNKpdJAkj+kEPCriiUAT5J8O+QVJJ9uYAXXxhjP0GtljyGPINmRRgDJT1U4AXid5JKQRyRJclBaOHQrmGxm53p4nBDyCADvNSBglVePy/VaFhHyBgC3N9gGWvmSmY3SIAXA9SFvMLPRjQgguT5JksEKjSQ3mdnJIU8obcv9N+yAhFnlcnk/AN9qK3R1de0e8gRsi/epBKgu0Mqb2SR/PzvkCTHG9h1YgGSF+ogAHvfB6lkhL+js7DzAldoRCTP93g0qmkKeQHJ5EwRsNrPjAFzjEWJMyAtIVpsgQLJE+YCmSwAWhrwAwJlNEtDtDvFGFVOKIiEPqFarAxTmZOYAplcqlUO00uoNknyiFwlzzWyokzE65AUkHyM5UTFfx2cAvKat4d7/3hoC1vn9n8UY7T/+bJtbVKeSLY3rlXHK2YaskSTJ0d4n+BDAzyTfIfkLyUc1RiP5jecBG2vaalN3wtJGSEk1XtOSMPUkSF4RsoaZjdIRmhjjoXqfJMnhel+pVI4FcI5Pli7u6OgYpIdUh7nR94lQMzsNQBeAF9OaMCkkbIkxXhiyhJmN1SGKKVOm7CXF29vb99RKkXxA17Vyqg38pMlWEVRH4dNJ3gRgMYAfm1U4hYS1mfYlY4zD1AyRyQM4wgn4AsDvngTNceVHApinh/Nq8WYAL/vW0cP/BuBjJUzuRBdo6+wkESMzI6Cjo2OQVlYPT/I+AKtrVuNWMztKTlARwvOBWXVW7c6eVXOChqrJqhabZg7u8Nb+CyuYHLIE0h3Td6oEdc5Q/sCP2/Rc17zxOu139w/KFr9SIeXX7/CKUgSMEinu6JohoCtrAj5okARRingZvbjm2sQY4/GyiBjjecoPALyhxquqR12T8j3bw6PKkiYTr0mZEkDy1QarsdpD2bzaz+UfSD7bkycAOMG/a4jivM8jtx/Q9JriH9+RMrZ/U3lI1gQ81OjBND+U9PpsWO//a1BhqhE7TqR4pJjvtUhFYU95QrlcPjC0ap+Q5DK3gu0O0idNt3kU+Mjb6cosZ7rTu1TbQim2Zo89v+XR5hgzGy9n5+FzNslFnoit0WdZE4A6Sm8C8Ik/1CL36mO8dT7ej99vP2skJaWsGieyFidhhpOy1ElqKkcA8EqmBJAcHmO8muT5OkonZXtdHxJjPMUPVMiMp5N80J3iCpJfN5o37IS8lCkBSZIMVptMyY2KInduyzQt9oFpd8aS7WEN81K3VUSpeaYEVLc5uJ4EphXkqZA1SK5vIQtY2KpN0u6MCHikZY7SsW9kQV8QcH8LWUD2kyiS0/pa8Rq5PHMCYowTWkBxybI+a70DuPt/CodqtW9ME0Ucpdm9ZKVqiz6fRJu3xlSdxRj3TZM+fch+9CMIfwODc8dHlsWAGwAAAABJRU5ErkJggg==" />
                            <h1 className='ml-2'>{carItem.make} </h1>
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-center mt-10'>
                        <button className='font-Lalezar-Regular,Helvetica font-extrabold border-2 w-96 h-12 rounded-xl bg-black text-white'>
                          Rent Now
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}



              {/* car card section ended */}



            </div>

          </div>
        </div>
      </div>

    </div >
  )
}

export default AutoListingPage