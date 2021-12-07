import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header, Icon, List, ListItem } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <div>
      <Header as="h2" textAlign="center">
        <Icon name="users" circular />
        <Header.Content>Reactivities</Header.Content>
      </Header>

      <List>
        {activities.map((activity: any) => (
          <ListItem key={activity.id}>
            {activity.title}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
