const initialState = {
  AppBarRdx: { 
    logged: false,
    opened: false, 
    searchbar: true,
    showMenu: false,
    simplebar: false, 
  },
  LoginPageRdx: { 
    register: false 
  },
  NotificationRdx: {
    all: true,
    chat: true,
    email: true,
    gearwatch: true,
    total: 3,
    list: [
      {text:"test notification 1", status:"loading", checked: false},
      {text:"test notification 2", status:"done", checked: true},
      {text:"test notification 3", status:"done", checked: true},
    ],
  },
  FeedRdx: {
    cols: 1,
    size: {w:640, h:480, n:"sddefault"},
    list: [
     { cardHeader: 
        { 
          title: "Simmer Quantum",
          profile: "wind85",
          avatar: "images/avatar.jpg",
          timeAdded: "4 hours ago",
        }, 
        videoId: "6xZqqZs4Gjk",
        url: "",
        play: false,
        likes: 1,
        liked: false,
        itemChips:
        {
          conditions: "good",
          size: "236x85",
          liters: "85",
          price: "1800",
        },
      },
      { cardHeader: 
        { 
          title: "Simmer Quantum",
          profile: "wind85",
          avatar: "images/avatar.jpg",
          timeAdded: "4 hours ago",
        }, 
        videoId: "6xZqqZs4Gjk",
        url: "",
        play: false,
        likes: 1,
        liked: false,
        itemChips:
        {
          conditions: "good",
          size: "236x85",
          liters: "85",
          price: "1800",
        },
      },
      { cardHeader: 
        { 
          title: "Simmer Quantum",
          profile: "wind85",
          avatar: "images/avatar.jpg",
          timeAdded: "4 hours ago",
        }, 
        videoId: "6xZqqZs4Gjk",
        url: "",
        play: false,
        likes: 1,
        liked: false,
        itemChips:
        {
          conditions: "good",
          size: "236x85",
          liters: "85",
          price: "1800",
        },
      },
      { cardHeader: 
        { 
          title: "Simmer Quantum",
          profile: "wind85",
          avatar: "images/avatar.jpg",
          timeAdded: "4 hours ago",
        }, 
        videoId: "6xZqqZs4Gjk",
        play: false,
        url: "",
        likes: 1,
        liked: false,
        itemChips:
        {
          conditions: "good",
          size: "236x85",
          liters: "85",
          price: "1800",
        },
      },
    ]
  },
  SideBarRdx: {
    showLogout: false,
  },
}

export default initialState
