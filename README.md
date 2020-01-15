## Engineer Fuel Calculator

A Fuel Calculator designed to aid Aircraft Engineers during the refuelling process of aircraft. 

This application was designed after a meeting with Royal Air Force Aircraft Engineers to understand the fueling process of their aircraft and how automation could make it more efficient.



### The Process

An Aircraft Engineer goes out to the aircraft knowing how much fuel it requires for it's next sortie.

They will then check how much fuel is left in the aircraft from the last sortie, which is generally measured in Kg although can be measured in lbs. They will subtract the remaining fuel from the required fuel to give them the amount of fuel they require and if necessary convert this to Kg.

They will then speak to the Aircraft Refueler to get the specific gravity to be applied to the fuel (specific gravity is a number unique to the location and the additives in the fuel. This number ranges from 0.7-0.88).

The Aircraft Engineer will then return to the aircraft and watch the tank gauge fill up to the required level, they will then tell the Aircraft Refueler to stop fueling.

The Aircraft Engineer then gets the amount of fuel delivered from the fuel tanker (measured in Lts) to the aircraft.

The delivered fuel is then multiplied by specific gravity to give the amount of fuel delivered in Kg (Lts * Specific Gravity = delivered fuel in Kg).

The percentage difference between the fuel required (Kg) and the fuel delivered (Kg) is calculated and if it is greater than 4% the aircraft has to be grounded and inspected for a fuel leak.

The Aircraft Engineers have also requested that this app can store multiple aircraft tail numbers so they can refuel several at once and then do all the paperwork when back inside. 
