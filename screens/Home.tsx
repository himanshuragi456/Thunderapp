import React, { useState } from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { City, Filters, CardItem } from '../components';
import styles, { DARK_GRAY } from '../assets/styles';
import DEMO from '../assets/data/demo';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const Home = () => {
  const [swiper, setSwiper] = useState<CardStack | null>(null);

  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <FontAwesome5 name="user-circle" size={30} color={DARK_GRAY} />
          {/* <Text>Friends</Text> */}
          <Image source={require('../assets/images/Friends_logo.png')} />
          <MaterialCommunityIcons
            name="bell-ring-outline"
            size={30}
            color={DARK_GRAY}
          />
          {/* <City /> */}
          {/* <Filters /> */}
        </View>

        <CardStack
          loop
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={(newSwiper): void => setSwiper(newSwiper)}
        >
          {DEMO.map((item) => (
            <Card key={item.id}>
              <CardItem
                hasActions
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  );
};

export default Home;
