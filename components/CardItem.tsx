import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from './Icon';
import { CardItemT } from '../types';
import styles, {
  BLACK,
  DARK_GRAY,
  DISLIKE_ACTIONS,
  FLASH_ACTIONS,
  LIKE_ACTIONS,
  STAR_ACTIONS,
  WHITE,
} from '../assets/styles';
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';

const CardItem = ({
  description,
  hasActions,
  hasVariant,
  image,
  isOnline,
  matches,
  name,
}: CardItemT) => {
  // Custom styling
  const fullWidth = Dimensions.get('window').width;

  const imageStyle = [
    {
      borderRadius: 100,
      width: 160,
      height: 160,
      marginTop: 20,
      zIndex: 5,
    },
  ];

  const nameStyle = [
    {
      paddingTop: hasVariant ? 10 : 15,
      color: BLACK,
      fontSize: 26,
      fontWeight: '700',
      marginRight: 10,
    },
  ];

  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <Image source={image} style={imageStyle} />
      <View style={styles.containerCardInfo}>
        <View style={styles.containerNameSocial}>
          <Text style={nameStyle}>{name}</Text>
          <TouchableOpacity style={styles.containerHomeSocial}>
            <AntDesign name="instagram" size={24} color={DARK_GRAY} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerHomeSocial}>
            <SimpleLineIcons
              name="social-twitter"
              size={24}
              color={DARK_GRAY}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerHomeSocial}>
            <FontAwesome5 name="tiktok" size={24} color={DARK_GRAY} />
          </TouchableOpacity>
        </View>
        {description && (
          <Text style={styles.descriptionCardItem}>{description}</Text>
        )}
      </View>

      {/* ACTIONS */}
      {hasActions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity style={styles.miniButton}>
            <MaterialIcons name="keyboard-arrow-left" size={42} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.waveButton}>
            <MaterialCommunityIcons
              name="hand-wave-outline"
              size={60}
              color="black"
            />
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.button}>
            <Icon name="close" color={DISLIKE_ACTIONS} size={25} />
          </TouchableOpacity> */}

          <TouchableOpacity style={styles.miniButton}>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={42}
              color="white"
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CardItem;
