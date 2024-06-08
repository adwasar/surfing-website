interface Sport {
  name: string;
  id: number;
}

interface Location {
  name: string;
  id: number;
}

interface Data {
  sportType: Sport[];
  location: Location[];
}

const data: Data = {
  sportType: [
    {
      name: 'Surfing',
      id: 1,
    },
    {
      name: 'Swimming',
      id: 2,
    },
    {
      name: 'Diving',
      id: 3,
    },
    {
      name: 'Sailing',
      id: 4,
    },
    {
      name: 'Kayaking',
      id: 5,
    },
  ],

  location: [
    {
      name: 'Bally, USA',
      id: 1,
    },
    {
      name: 'Beachside, Australia',
      id: 2,
    },
    {
      name: 'Coastline, Spain',
      id: 3,
    },
    {
      name: 'Island, Greece',
      id: 4,
    },
    {
      name: 'Riverbank, Canada',
      id: 5,
    },
  ],
};

export default data;
