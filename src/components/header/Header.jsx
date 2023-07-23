import {
  faBed,
  faCalendarDays,
  faPerson
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Button } from 'react-bootstrap'
import './header.css'
import { DateRange } from 'react-date-range'
import { useState } from 'react'
import { format } from 'date-fns'

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  })
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
      }
    })
  }
  return (
    <div style={{ backgroundColor: '#6527BE' }} className="text-light ">
      <Container className="position-relative z-3">
        <p style={{ fontSize: '32px', paddingTop: '50px' }}>
          Find a hotel with good price? Find here
        </p>
        <p style={{ fontSize: '16px' }}>
          Welcome to The Hotels, enjoy an unforgettable stay at our hotel with
          good price and many facilities
        </p>
        <Button
          className="border-0"
          style={{ backgroundColor: '#9681EB', marginBottom: '100px' }}
        >
          Sign in/ Register
        </Button>

        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerSearchIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="headerSearchIcon"
            />
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
            <span
              onClick={() => {
                setOpenDate(!openDate)
              }}
              className="headerSearchText"
            >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
              date[0].startDate,
              'MM/dd/yyyy'
            )}`}</span>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerSearchIcon" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="headerSearchText"
            >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
            {openOptions && (
              <div className="options">
                <div className="optionsItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCount">
                    <Button
                      disabled={options.adult <= 1}
                      className="border-0"
                      style={{ backgroundColor: '#6527BE' }}
                      onClick={() => handleOption('adult', 'd')}
                    >
                      -
                    </Button>
                    <span>{options.adult}</span>
                    <Button
                      className="border-0"
                      style={{ backgroundColor: '#6527BE' }}
                      onClick={() => handleOption('adult', 'i')}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="optionsItem">
                  <span className="optionText">Children</span>
                  <div className="optionCount">
                    <Button
                      disabled={options.children <= 0}
                      className="border-0"
                      style={{ backgroundColor: '#6527BE' }}
                      onClick={() => handleOption('children', 'd')}
                    >
                      -
                    </Button>
                    <span>{options.children}</span>
                    <Button
                      className="border-0"
                      style={{ backgroundColor: '#6527BE' }}
                      onClick={() => handleOption('children', 'i')}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="optionsItem">
                  <span className="optionText">Room</span>
                  <div className="optionCount">
                    <Button
                      disabled={options.room <= 1}
                      className="border-0"
                      style={{ backgroundColor: '#6527BE' }}
                      onClick={() => handleOption('room', 'd')}
                    >
                      -
                    </Button>
                    <span>{options.room}</span>
                    <Button
                      className="border-0"
                      style={{ backgroundColor: '#6527BE' }}
                      onClick={() => handleOption('room', 'i')}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <Button className="border-0" style={{ backgroundColor: '#6527BE' }}>
              Search
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
