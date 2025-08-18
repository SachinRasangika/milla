import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaMapMarkerAlt, 
  FaCar, 
  FaUsers, 
  FaMoneyBillAlt, 
  FaCheck, 
  FaChevronLeft, 
  FaChevronRight, 
  FaShareAlt, 
  FaSave, 
  FaCalculator, 
  FaInfoCircle, 
  FaArrowLeft,
  FaPlus,
  FaMinus,
  FaCalendarAlt,
  FaEdit,
  FaExclamationTriangle,
  FaDownload,
  FaWhatsapp,
  FaClock
} from "react-icons/fa";
import "./TourPlanner.css";
import Button from "../Button/Button";

// Sri Lankan Cities with Categories
const sriLankanCities = [
  { id: 1, name: "Colombo", category: "Cultural", description: "Commercial Capital" },
  { id: 2, name: "Galle", category: "Beach", description: "Historic Fort & Beaches" },
  { id: 3, name: "Matara", category: "Beach", description: "Southern Coastal Town" },
  { id: 4, name: "Kandy", category: "Cultural", description: "Temple of the Tooth" },
  { id: 5, name: "Nuwara Eliya", category: "Nature", description: "Tea Country" },
  { id: 6, name: "Sigiriya", category: "Cultural", description: "Ancient Rock Fortress" },
  { id: 7, name: "Mirissa", category: "Wildlife", description: "Whale Watching" },
  { id: 8, name: "Ella", category: "Nature", description: "Scenic Train Rides" }
];

// Attractions organized by city
const attractionsByCity = {
  1: [ // Colombo
    { id: 101, name: "Galle Face Green", price: 0, hours: 2 },
    { id: 102, name: "Gangaramaya Temple", price: 300, hours: 1.5 },
    { id: 103, name: "Colombo National Museum", price: 500, hours: 2 },
    { id: 104, name: "Pettah Market", price: 0, hours: 1.5 }
  ],
  2: [ // Galle
    { id: 201, name: "Galle Fort", price: 500, hours: 3 },
    { id: 202, name: "Japanese Peace Pagoda", price: 100, hours: 1 },
    { id: 203, name: "Maritime Museum", price: 250, hours: 1 },
    { id: 204, name: "Unawatuna Beach", price: 0, hours: 2 }
  ],
  3: [ // Matara
    { id: 301, name: "Parrot Rock", price: 150, hours: 1 },
    { id: 302, name: "Star Fort", price: 250, hours: 1.5 },
    { id: 303, name: "Weherahena Temple", price: 150, hours: 1 },
    { id: 304, name: "Polhena Beach", price: 0, hours: 2 }
  ],
  4: [ // Kandy
    { id: 401, name: "Temple of the Tooth", price: 500, hours: 2 },
    { id: 402, name: "Royal Botanical Gardens", price: 750, hours: 3 },
    { id: 403, name: "Kandy Lake", price: 0, hours: 1 },
    { id: 404, name: "Bahirawakanda Buddha Statue", price: 150, hours: 1 }
  ],
  5: [ // Nuwara Eliya
    { id: 501, name: "Horton Plains National Park", price: 1250, hours: 6 },
    { id: 502, name: "Gregory Lake", price: 250, hours: 2 },
    { id: 503, name: "Tea Factory Visit", price: 750, hours: 2 },
    { id: 504, name: "Strawberry Fields", price: 400, hours: 1.5 }
  ],
  6: [ // Sigiriya
    { id: 601, name: "Sigiriya Rock Fortress", price: 1500, hours: 4 },
    { id: 602, name: "Pidurangala Rock", price: 500, hours: 3 },
    { id: 603, name: "Dambulla Cave Temple", price: 600, hours: 2 },
    { id: 604, name: "Village Tour", price: 750, hours: 2.5 }
  ],
  7: [ // Mirissa
    { id: 701, name: "Whale Watching Tour", price: 1750, hours: 4 },
    { id: 702, name: "Coconut Tree Hill", price: 0, hours: 1 },
    { id: 703, name: "Stilt Fishing Experience", price: 500, hours: 1.5 },
    { id: 704, name: "Mirissa Beach", price: 0, hours: 2 }
  ],
  8: [ // Ella
    { id: 801, name: "Nine Arches Bridge", price: 0, hours: 1.5 },
    { id: 802, name: "Little Adam's Peak Hike", price: 250, hours: 3 },
    { id: 803, name: "Ella Rock Hike", price: 400, hours: 4 },
    { id: 804, name: "Flying Ravana Zip Line", price: 1250, hours: 1 }
  ]
};

// Vehicle options with local models
const vehicles = [
  { 
    id: 1, 
    type: "Car", 
    localModel: "Toyota Axio", 
    capacity: 3, 
    pricePerDay: 8000,
    description: "Perfect for couples/small families"
  },
  { 
    id: 2, 
    type: "Van", 
    localModel: "Toyota Hiace", 
    capacity: 8, 
    pricePerDay: 12000,
    description: "Comfortable for families"
  },
  { 
    id: 3, 
    type: "Mini Bus", 
    localModel: "Mitsubishi Rosa", 
    capacity: 20, 
    pricePerDay: 18000,
    description: "Ideal for large groups"
  }
];

// Add-on services
const addOnServices = [
  { id: "guide", name: "Professional Guide", pricePerDay: 5000, description: "English-speaking local expert" },
  { id: "airport", name: "Airport Pickup", pricePerTrip: 4000, description: "Colombo Airport transfers" },
  { id: "tea", name: "Tea Factory Experience", pricePerPerson: 2000, description: "Traditional tea plantation tour" }
];

// Exchange rate (approximate)
const USD_TO_LKR = 300;

const convertToUSD = (lkr) => Math.round(lkr / USD_TO_LKR);
const convertToLKR = (usd) => Math.round(usd * USD_TO_LKR);

export default function TourPlanner() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  
  // Step 1: Trip Foundation
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedAttractions, setSelectedAttractions] = useState({});
  
  // Step 2: Group & Transport
  const [totalPeople, setTotalPeople] = useState(2);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  
  // Step 3: Trip Refinement
  const [cityNights, setCityNights] = useState({});
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  
  // Step 4: Pricing & Output
  const [totalPriceLKR, setTotalPriceLKR] = useState(0);
  const [priceBreakdown, setPriceBreakdown] = useState({});
  const [warnings, setWarnings] = useState([]);

  const steps = [
    { number: 1, title: "Trip Foundation", subtitle: "Select destinations and attractions" },
    { number: 2, title: "Group & Transport", subtitle: "Group size and vehicle selection" },
    { number: 3, title: "Trip Refinement", subtitle: "Duration and add-ons" },
    { number: 4, title: "Pricing & Output", subtitle: "Final quote and booking" }
  ];

  // Calculate total trip duration
  const getTotalNights = () => {
    return Object.values(cityNights).reduce((sum, nights) => sum + (nights || 0), 0);
  };

  const getTotalDays = () => {
    return getTotalNights() + 1;
  };

  // Auto-suggest vehicle based on group size
  const getRecommendedVehicle = () => {
    if (totalPeople <= 3) return vehicles[0]; // Car
    if (totalPeople <= 8) return vehicles[1]; // Van
    return vehicles[2]; // Mini Bus
  };

  // Calculate daily hours per city
  const getDailyHours = (cityId) => {
    const cityAttractions = selectedAttractions[cityId] || [];
    return cityAttractions.reduce((sum, attraction) => sum + attraction.hours, 0);
  };

  // Check for overplanning warnings
  const checkWarnings = () => {
    const newWarnings = [];
    
    // Check daily hours
    selectedCities.forEach(city => {
      const dailyHours = getDailyHours(city.id);
      const nights = cityNights[city.id] || 1;
      const avgHoursPerDay = dailyHours / nights;
      
      if (avgHoursPerDay > 8) {
        newWarnings.push(`Too many hours planned in ${city.name}. Reduce activities.`);
      }
    });

    // Check vehicle capacity
    if (selectedVehicle && totalPeople > selectedVehicle.capacity) {
      newWarnings.push(`Selected ${selectedVehicle.type} only fits ${selectedVehicle.capacity} people. You have ${totalPeople}.`);
    }

    // Check peak season (Dec-Apr)
    const currentMonth = new Date().getMonth() + 1;
    if (currentMonth >= 12 || currentMonth <= 4) {
      newWarnings.push("Peak season surcharge applies in December-April.");
    }

    setWarnings(newWarnings);
  };

  // Calculate pricing
  const calculatePricing = () => {
    let attractionsTotal = 0;
    let transportTotal = 0;
    let addOnsTotal = 0;
    let accommodationEstimate = 0;

    // Attractions
    Object.values(selectedAttractions).flat().forEach(attraction => {
      attractionsTotal += attraction.price * adults; // Children often free for attractions
    });

    // Transport
    if (selectedVehicle) {
      transportTotal = selectedVehicle.pricePerDay * getTotalDays();
    }

    // Add-ons
    selectedAddOns.forEach(addOnId => {
      const addOn = addOnServices.find(service => service.id === addOnId);
      if (addOn) {
        if (addOn.pricePerDay) {
          addOnsTotal += addOn.pricePerDay * getTotalDays();
        } else if (addOn.pricePerTrip) {
          addOnsTotal += addOn.pricePerTrip;
        } else if (addOn.pricePerPerson) {
          addOnsTotal += addOn.pricePerPerson * totalPeople;
        }
      }
    });

    // Accommodation estimate (rough)
    accommodationEstimate = getTotalNights() * 8000 * Math.ceil(totalPeople / 2); // Assuming double occupancy

    const subtotal = attractionsTotal + transportTotal + addOnsTotal;
    const total = subtotal + accommodationEstimate;

    setTotalPriceLKR(total);
    setPriceBreakdown({
      attractions: attractionsTotal,
      transport: transportTotal,
      addOns: addOnsTotal,
      accommodation: accommodationEstimate,
      total: total
    });
  };

  // Effects
  useEffect(() => {
    if (currentStep >= 2) {
      setTotalPeople(adults + children);
    }
  }, [adults, children, currentStep]);

  useEffect(() => {
    if (currentStep >= 3) {
      calculatePricing();
      checkWarnings();
    }
  }, [selectedCities, selectedAttractions, selectedVehicle, totalPeople, cityNights, selectedAddOns, currentStep]);

  // Navigation functions
  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: 
        return selectedCities.length > 0 && 
               selectedCities.some(city => selectedAttractions[city.id]?.length > 0);
      case 2: 
        return selectedVehicle && totalPeople > 0;
      case 3: 
        return getTotalNights() > 0;
      case 4: 
        return true;
      default: 
        return false;
    }
  };

  // City and attraction handlers
  const handleCitySelect = (e) => {
    const cityId = parseInt(e.target.value);
    if (cityId && !selectedCities.find(c => c.id === cityId)) {
      const city = sriLankanCities.find(c => c.id === cityId);
      setSelectedCities([...selectedCities, city]);
      setSelectedAttractions({...selectedAttractions, [cityId]: []});
      setCityNights({...cityNights, [cityId]: 1});
    }
  };

  const removeCity = (cityId) => {
    setSelectedCities(selectedCities.filter(c => c.id !== cityId));
    const newAttractions = {...selectedAttractions};
    const newNights = {...cityNights};
    delete newAttractions[cityId];
    delete newNights[cityId];
    setSelectedAttractions(newAttractions);
    setCityNights(newNights);
  };

  const handleAttractionSelect = (cityId, e) => {
    const attractionId = parseInt(e.target.value);
    if (attractionId) {
      const attraction = attractionsByCity[cityId].find(a => a.id === attractionId);
      const cityAttractions = selectedAttractions[cityId] || [];
      
      if (!cityAttractions.find(a => a.id === attractionId)) {
        setSelectedAttractions({
          ...selectedAttractions,
          [cityId]: [...cityAttractions, attraction]
        });
      }
    }
  };

  const removeAttraction = (cityId, attractionId) => {
    setSelectedAttractions({
      ...selectedAttractions,
      [cityId]: selectedAttractions[cityId].filter(a => a.id !== attractionId)
    });
  };

  const handleVehicleSelect = (e) => {
    const vehicleId = parseInt(e.target.value);
    const vehicle = vehicles.find(v => v.id === vehicleId);
    setSelectedVehicle(vehicle);
  };

  const handleAddOnToggle = (addOnId) => {
    if (selectedAddOns.includes(addOnId)) {
      setSelectedAddOns(selectedAddOns.filter(id => id !== addOnId));
    } else {
      setSelectedAddOns([...selectedAddOns, addOnId]);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content foundation-step">
            <h3>Trip Foundation</h3>
            <p className="step-description">Select destinations and attractions</p>

            <div className="form-section">
              <label htmlFor="city-select">Select Destination</label>
              <select id="city-select" onChange={handleCitySelect} value="">
                <option value="">Choose a city...</option>
                {sriLankanCities
                  .filter(city => !selectedCities.find(c => c.id === city.id))
                  .map(city => (
                  <option key={city.id} value={city.id}>
                    {city.name} - {city.description}
                  </option>
                ))}
              </select>
            </div>

            {selectedCities.map(city => (
              <div key={city.id} className="city-section">
                <div className="city-header">
                  <h4>
                    <FaMapMarkerAlt /> {city.name}
                    <span className="city-category">{city.category}</span>
                  </h4>
                  <button onClick={() => removeCity(city.id)} className="remove-btn">
                    Remove
                  </button>
                </div>

                <div className="form-section">
                  <label>Select Attractions in {city.name}</label>
                  <select onChange={(e) => handleAttractionSelect(city.id, e)} value="">
                    <option value="">Add an attraction...</option>
                    {attractionsByCity[city.id]
                      ?.filter(attraction => 
                        !(selectedAttractions[city.id] || []).find(a => a.id === attraction.id)
                      )
                      .map(attraction => (
                      <option key={attraction.id} value={attraction.id}>
                        {attraction.name} - LKR {attraction.price.toLocaleString()} 
                        ({attraction.hours}h)
                      </option>
                    ))}
                  </select>
                </div>

                {selectedAttractions[city.id]?.length > 0 && (
                  <div className="selected-attractions">
                    <h5>Selected Attractions:</h5>
                    {selectedAttractions[city.id].map(attraction => (
                      <div key={attraction.id} className="attraction-item">
                        <span className="attraction-name">{attraction.name}</span>
                        <span className="attraction-details">
                          LKR {attraction.price.toLocaleString()} • {attraction.hours}h
                        </span>
                        <button 
                          onClick={() => removeAttraction(city.id, attraction.id)}
                          className="remove-attraction-btn"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {selectedCities.length === 0 && (
              <div className="empty-state">
                <FaMapMarkerAlt className="empty-icon" />
                <p>Select cities from the dropdown above to start planning your trip</p>
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="step-content group-transport-step">
            <h3>Group & Transport</h3>
            <p className="step-description">Group size and vehicle selection</p>

            <div className="form-grid">
              <div className="form-section">
                <label htmlFor="group-size">Group Size (1–20)</label>
                <select 
                  id="group-size" 
                  value={totalPeople} 
                  onChange={(e) => {
                    const total = parseInt(e.target.value);
                    setTotalPeople(total);
                    setAdults(Math.max(1, total - children));
                  }}
                >
                  {Array.from({length: 20}, (_, i) => i + 1).map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                  ))}
                </select>
              </div>

              <div className="form-section">
                <label htmlFor="adults">Adults</label>
                <select 
                  id="adults" 
                  value={adults} 
                  onChange={(e) => setAdults(parseInt(e.target.value))}
                >
                  {Array.from({length: totalPeople}, (_, i) => i + 1).map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div className="form-section">
                <label htmlFor="children">Children</label>
                <select 
                  id="children" 
                  value={children} 
                  onChange={(e) => {
                    const kids = parseInt(e.target.value);
                    setChildren(kids);
                    setAdults(totalPeople - kids);
                  }}
                >
                  {Array.from({length: totalPeople}, (_, i) => i).map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="children-note">
              <FaInfoCircle /> Children under 5 travel free
            </div>

            {totalPeople > 1 && (
              <div className="vehicle-recommendation">
                <FaInfoCircle />
                <span>
                  Recommended for {totalPeople} people: <strong>{getRecommendedVehicle().type}</strong> 
                  ({getRecommendedVehicle().localModel})
                </span>
              </div>
            )}

            <div className="form-section">
              <label htmlFor="vehicle-select">Transport (Auto-Suggest)</label>
              <select 
                id="vehicle-select" 
                value={selectedVehicle?.id || ""} 
                onChange={handleVehicleSelect}
              >
                <option value="">Select vehicle...</option>
                {vehicles.map(vehicle => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {vehicle.type} (1–{vehicle.capacity} pax) – {vehicle.localModel} - 
                    LKR {vehicle.pricePerDay.toLocaleString()}/day
                  </option>
                ))}
              </select>
            </div>

            {selectedVehicle && (
              <div className="vehicle-details">
                <h5>Selected Vehicle: {selectedVehicle.type}</h5>
                <p>{selectedVehicle.description}</p>
                <p><strong>Model:</strong> {selectedVehicle.localModel}</p>
                <p><strong>Capacity:</strong> Up to {selectedVehicle.capacity} people</p>
                <p><strong>Rate:</strong> LKR {selectedVehicle.pricePerDay.toLocaleString()}/day</p>
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="step-content refinement-step">
            <h3>Trip Refinement</h3>
            <p className="step-description">Duration and add-ons</p>

            <div className="form-section">
              <h4>Duration per City (1–5 nights)</h4>
              {selectedCities.map(city => (
                <div key={city.id} className="city-duration">
                  <label>{city.name}</label>
                  <select 
                    value={cityNights[city.id] || 1}
                    onChange={(e) => setCityNights({
                      ...cityNights,
                      [city.id]: parseInt(e.target.value)
                    })}
                  >
                    {[1,2,3,4,5].map(nights => (
                      <option key={nights} value={nights}>
                        {nights} night{nights > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                  <span className="daily-hours">
                    <FaClock /> {getDailyHours(city.id)}h planned
                  </span>
                </div>
              ))}
            </div>

            <div className="form-section">
              <h4>Add-Ons (Checkboxes)</h4>
              {addOnServices.map(addOn => (
                <div key={addOn.id} className="addon-item">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={selectedAddOns.includes(addOn.id)}
                      onChange={() => handleAddOnToggle(addOn.id)}
                    />
                    <span className="addon-name">{addOn.name}</span>
                    <span className="addon-description">{addOn.description}</span>
                    <span className="addon-price">
                      LKR {(addOn.pricePerDay || addOn.pricePerTrip || addOn.pricePerPerson).toLocaleString()}
                      {addOn.pricePerDay && '/day'}
                      {addOn.pricePerTrip && '/trip'}
                      {addOn.pricePerPerson && '/person'}
                    </span>
                  </label>
                </div>
              ))}
            </div>

            <div className="trip-summary">
              <h4>Trip Summary</h4>
              <p><strong>Total Duration:</strong> {getTotalDays()} days, {getTotalNights()} nights</p>
              <p><strong>Cities:</strong> {selectedCities.map(c => c.name).join(', ')}</p>
              <p><strong>Group:</strong> {adults} adults, {children} children</p>
              <p><strong>Vehicle:</strong> {selectedVehicle?.type} ({selectedVehicle?.localModel})</p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="step-content pricing-step">
            <h3>Pricing & Output</h3>
            <p className="step-description">Final quote and booking options</p>

            <div className="pricing-layout">
              <div className="cost-breakdown">
                <h4><FaMoneyBillAlt /> Cost Breakdown Table</h4>
                <table className="pricing-table">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>LKR</th>
                      <th>USD</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Attractions ({Object.values(selectedAttractions).flat().length})</td>
                      <td>LKR {priceBreakdown.attractions?.toLocaleString()}</td>
                      <td>${convertToUSD(priceBreakdown.attractions || 0)}</td>
                    </tr>
                    <tr>
                      <td>Transport ({getTotalDays()} days)</td>
                      <td>LKR {priceBreakdown.transport?.toLocaleString()}</td>
                      <td>${convertToUSD(priceBreakdown.transport || 0)}</td>
                    </tr>
                    {priceBreakdown.addOns > 0 && (
                      <tr>
                        <td>Add-ons</td>
                        <td>LKR {priceBreakdown.addOns?.toLocaleString()}</td>
                        <td>${convertToUSD(priceBreakdown.addOns || 0)}</td>
                      </tr>
                    )}
                    <tr>
                      <td>Hotels (estimate)</td>
                      <td>LKR {priceBreakdown.accommodation?.toLocaleString()}</td>
                      <td>${convertToUSD(priceBreakdown.accommodation || 0)}</td>
                    </tr>
                    <tr className="total-row">
                      <td><strong>Total</strong></td>
                      <td><strong>LKR {totalPriceLKR.toLocaleString()}</strong></td>
                      <td><strong>${convertToUSD(totalPriceLKR)}</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {warnings.length > 0 && (
                <div className="warnings-section">
                  <h4><FaExclamationTriangle /> Warnings</h4>
                  {warnings.map((warning, index) => (
                    <div key={index} className="warning-item">
                      <FaExclamationTriangle />
                      <span>{warning}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="output-options">
                <h4>Output Options</h4>
                <div className="output-buttons">
                  <button className="output-btn">
                    <FaDownload /> PDF Download
                  </button>
                  <button className="output-btn">
                    <FaCalendarAlt /> Google Calendar Sync
                  </button>
                  <button className="output-btn">
                    <FaWhatsapp /> WhatsApp Share
                  </button>
                </div>
              </div>

              <div className="booking-actions">
                <h4>Ready to Book?</h4>
                <div className="action-buttons">
                  <button className="action-btn primary-action">
                    <FaCalculator />
                    <div className="btn-content">
                      <span className="btn-title">Get Exact Quote</span>
                      <span className="btn-subtitle">Contact our travel experts</span>
                    </div>
                  </button>
                  
                  <button className="action-btn secondary-action">
                    <FaSave />
                    <div className="btn-content">
                      <span className="btn-title">Save This Plan</span>
                      <span className="btn-subtitle">Continue planning later</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="tour-planner">
      <div className="container">
        <div className="planner-header">
          <button className="back-button" onClick={() => navigate('/')}>
            <FaArrowLeft /> Back to Home
          </button>
          <h1>Sri Lankan Tour Planner</h1>
          <p>Lightweight, dropdown-driven tour customization</p>
        </div>

        <div className="progress-tracker">
          {steps.map((step, index) => {
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;
            
            return (
              <div 
                key={step.number}
                className={`progress-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                onClick={() => setCurrentStep(step.number)}
              >
                <div className="step-circle">
                  {isCompleted ? <FaCheck /> : step.number}
                </div>
                <div className="step-info">
                  <span className="step-title">{step.title}</span>
                  <span className="step-subtitle">{step.subtitle}</span>
                </div>
                {index < steps.length - 1 && <div className="step-connector"></div>}
              </div>
            );
          })}
        </div>

        <div className="planner-content">
          {renderStepContent()}
        </div>

        <div className="planner-navigation">
          <div className="nav-buttons">
            {currentStep > 1 && (
              <Button 
                text={<><FaChevronLeft /> Previous</>} 
                variant="outline" 
                onClick={prevStep}
              />
            )}
            <div className="nav-spacer"></div>
            {currentStep < 4 ? (
              <Button 
                text={<>Next <FaChevronRight /></>} 
                variant="primary" 
                onClick={nextStep}
                disabled={!canProceed()}
              />
            ) : null}
          </div>
          
          {!canProceed() && (
            <div className="validation-message">
              {currentStep === 1 && "Select at least 1 city and 1 attraction to continue"}
              {currentStep === 2 && "Please select a vehicle"}
              {currentStep === 3 && "Set duration for at least one city"}
            </div>
          )}
        </div>

        {totalPriceLKR > 0 && (
          <div className="price-sticky-bar">
            <div className="price-summary">
              <span className="price-label">Estimated Total:</span>
              <span className="price-dual">
                LKR {totalPriceLKR.toLocaleString()} / ${convertToUSD(totalPriceLKR)}
              </span>
              <span className="price-note">({getTotalDays()} days, {totalPeople} people)</span>
            </div>
            <Button text="Get Quote" variant="primary" />
          </div>
        )}
      </div>
    </div>
  );
}
