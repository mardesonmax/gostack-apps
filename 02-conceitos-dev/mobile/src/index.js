import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import api from './services/api';

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const {data} = await api.get('/projects');
      setProjects(data);
    })();
  }, []);

  const handleAddProject = async () => {
    const {data} = await api.post('/projects', {
      title: `Projeto ${Date.now()}`,
      owner: 'Mardeson Pereira',
    });

    setProjects([...projects, data]);
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({item: project}) => (
            <View style={styles.item}>
              <Text style={styles.title}>{project.title}</Text>
              <Text style={styles.owner}>{project.owner}</Text>
            </View>
          )}
        />

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleAddProject}>
          <Text style={styles.buttonText}>Novo Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },

  title: {
    fontSize: 22,
    color: '#333',
  },

  owner: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#7159c1',
    marginTop: 5,
  },

  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 5,
  },

  button: {
    backgroundColor: '#303030',
    padding: 10,
  },

  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7159c1',
  },
});
