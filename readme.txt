### Read me ###

Task: Create React application as per the requirements specified in requirements.txt

Dependacies Used:
	Bootstrap: UI library for design
	url => URL formatting utility
	json-server => Fake REST apis for backend

Steps to run applications:
    1. npm install -g json-server
    2. npm install in project directory
	3. Open another terminal => npm run jsonserver
	4. Open another terminal => npm start

Notes:
	1. json-server is running at port 3000
	2. react app is running at port 3005
	3. dummy database located in db.json
    4. Database can be restored from initial db data located in db_v1.0.json

Requirements Covered:
	1. Member details view
	2. Creating and updating dummy data using api calls
    3. OrderItems view
	4. Fulfill order item functionality by clicking on order item image
	5. Assign closet functionality
	6. Validation for closet assign button, delivery man select dropdown

Requirements not covered due to time limitations:
	1. Order status dropdown is not functional
	2. Only when all items are packed, can then the user be allowed to assign a delivery man.

Technical Questions:
Q. Which React Pattern did you used for this and why?
A. As given task is just one page with order details I used strategy as below:
	+ Created main parent component (WeeklyOrderComponent) 
	+ On mounting parent component I called api which fetches orderItems, Member details
	+ Then pass this data to child components.
	+ Child components updates data using PATCH http method and updates state of parent component 
	(child --> parent data passing)

Challenged faced: 
	Passing data from child -> parent -> parent of parent (eg: orderItem => orderItems => WeeklyOrderComponent)
	Solution: 
		I could have used Redux but it needs initial boiler plate to setup 
 		and I was running out of time.

Q. What is your preferred React Stack i.e. React+Redux+Fetch, etc and why?
A. I am comfortable in using React with redux and library for UI design (eg: MaterialUI by google or Bootstrap)
   and Fetch method for calling apis as it is native to Javascript.