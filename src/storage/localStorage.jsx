
  const employees = [
  {
    id: 1,
    email: "employee1@gmail.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        accepted: true,
        taskTitle: "Build Login UI",
        taskDescription: "Create login page using React and Tailwind CSS",
        taskDate: "2026-06-05",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        accepted: true,
        taskTitle: "Fix Navbar",
        taskDescription: "Make navbar responsive for mobile devices",
        taskDate: "2026-06-04",
        category: "UI Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        accepted: false,
        taskTitle: "Dashboard Design",
        taskDescription: "Design employee dashboard layout",
        taskDate: "2026-06-06",
        category: "Design"
      }
    ]
  },

  {
    id: 2,
    email: "employee2@gmail.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        accepted: true,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with backend API",
        taskDate: "2026-06-07",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        accepted: true,
        taskTitle: "Bug Fixing",
        taskDescription: "Resolve sidebar issue",
        taskDate: "2026-06-03",
        category: "Debugging"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        accepted: true,
        taskTitle: "Database Setup",
        taskDescription: "Create MongoDB schema",
        taskDate: "2026-06-02",
        category: "Database"
      }
    ]
  },

  {
    id: 3,
    email: "employee3@gmail.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        accepted: true,
        taskTitle: "Profile Page",
        taskDescription: "Create user profile UI",
        taskDate: "2026-06-08",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        accepted: true,
        taskTitle: "Footer Update",
        taskDescription: "Improve footer styling",
        taskDate: "2026-06-01",
        category: "UI"
      }
    ]
  },

  {
    id: 4,
    email: "employee4@gmail.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        accepted: true,
        taskTitle: "Authentication",
        taskDescription: "Implement login authentication",
        taskDate: "2026-06-09",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        accepted: false,
        taskTitle: "Deploy App",
        taskDescription: "Deploy React app to hosting",
        taskDate: "2026-06-05",
        category: "Deployment"
      }
    ]
  },

  {
    id: 5,
    email: "employee5@gmail.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        accepted: true,
        taskTitle: "Optimize Website",
        taskDescription: "Improve website speed",
        taskDate: "2026-06-10",
        category: "Performance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        accepted: true,
        taskTitle: "Fix CSS Issue",
        taskDescription: "Resolve layout breaking issue",
        taskDate: "2026-06-02",
        category: "CSS"
      }
    ]
  },

  {
    id: 6,
    email: "employee6@gmail.com",
    password: "1234",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        accepted: true,
        taskTitle: "Create Reports",
        taskDescription: "Generate employee reports",
        taskDate: "2026-06-11",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        accepted: true,
        taskTitle: "Email Service",
        taskDescription: "Setup email notifications",
        taskDate: "2026-06-04",
        category: "Service"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "1234"
  }
];

  const taskCount =[{
  active: 2,
  completed: 5,
  failed: 1,
  newTask: 3
}]

export const setLocalStorage =() =>{
localStorage.setItem('employees',JSON.stringify(employees))
localStorage.setItem('admin',JSON.stringify(admin))
 


}

export const getLocalStorage =() =>{
 const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
 
 
 return {employees,admin}

}