import { HP } from "@/utils/utils";
import { LinearGradient as NewLinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, {
  Circle,
  Defs,
  Ellipse,
  LinearGradient,
  Path,
  Rect,
  Stop
} from 'react-native-svg';

const IsometricIllustration = () => {
  return (
    <Svg width={280} height={200} viewBox="0 0 280 200">
      <Defs>
        {/* Gradients */}
        <LinearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#60A5FA" />
          <Stop offset="100%" stopColor="#3B82F6" />
        </LinearGradient>
        <LinearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#A78BFA" />
          <Stop offset="100%" stopColor="#8B5CF6" />
        </LinearGradient>
        <LinearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#34D399" />
          <Stop offset="100%" stopColor="#10B981" />
        </LinearGradient>
        <LinearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#F472B6" />
          <Stop offset="100%" stopColor="#EC4899" />
        </LinearGradient>
        <LinearGradient id="platformGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#F8FAFC" />
          <Stop offset="100%" stopColor="#E2E8F0" />
        </LinearGradient>
      </Defs>

      {/* Platform base */}
      <Path
        d="M80 160 L200 160 L220 170 L200 180 L80 180 L60 170 Z"
        fill="url(#platformGradient)"
        stroke="#CBD5E1"
        strokeWidth="1"
      />

      {/* Platform top */}
      <Path
        d="M80 160 L200 160 L220 150 L100 150 Z"
        fill="#FFFFFF"
        stroke="#E2E8F0"
        strokeWidth="1"
      />

      {/* Person body */}
      <Ellipse cx="140" cy="145" rx="8" ry="15" fill="url(#blueGradient)" />

      {/* Person head */}
      <Circle cx="140" cy="125" r="8" fill="#FBBF24" />

      {/* Person arms */}
      <Path d="M132 135 Q125 140 130 145" stroke="url(#blueGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <Path d="M148 135 Q155 140 150 145" stroke="url(#blueGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Chart/Analytics panel */}
      <Path
        d="M90 80 L130 80 L135 85 L130 130 L90 130 L85 125 Z"
        fill="#FFFFFF"
        stroke="#E2E8F0"
        strokeWidth="1"
      />

      {/* Chart bars */}
      <Rect x="95" y="110" width="4" height="15" fill="url(#blueGradient)" />
      <Rect x="102" y="105" width="4" height="20" fill="url(#purpleGradient)" />
      <Rect x="109" y="100" width="4" height="25" fill="url(#greenGradient)" />
      <Rect x="116" y="95" width="4" height="30" fill="url(#pinkGradient)" />

      {/* Dashboard panel */}
      <Path
        d="M150 70 L210 70 L215 75 L210 110 L150 110 L145 105 Z"
        fill="#FFFFFF"
        stroke="#E2E8F0"
        strokeWidth="1"
      />

      {/* Dashboard elements */}
      <Circle cx="160" cy="85" r="6" fill="url(#greenGradient)" />
      <Circle cx="180" cy="85" r="6" fill="url(#blueGradient)" />
      <Circle cx="200" cy="85" r="6" fill="url(#pinkGradient)" />

      {/* Dashboard bars */}
      <Rect x="155" y="95" width="45" height="3" fill="#E2E8F0" />
      <Rect x="155" y="100" width="35" height="3" fill="#E2E8F0" />

      {/* Floating cubes */}
      <Path
        d="M50 100 L65 100 L70 95 L70 110 L55 110 L50 115 Z"
        fill="url(#blueGradient)"
      />

      <Path
        d="M230 120 L240 120 L245 115 L245 125 L235 125 L230 130 Z"
        fill="url(#greenGradient)"
      />

      <Path
        d="M45 170 L55 170 L60 165 L60 175 L50 175 L45 180 Z"
        fill="url(#pinkGradient)"
      />

      {/* Floating circle */}
      <Circle cx="225" cy="90" r="12" fill="url(#purpleGradient)" opacity="0.8" />
    </Svg>
  );
};

const GoTaskWelcomeScreen = () => {
  return (
    <NewLinearGradient
      colors={['#1c4c87', '#349eea']}
      start={{ x: 0.50, y: 0.00 }}
      end={{ x: 0.50, y: 1.00 }}
      className="flex-1 justify-between items-center px-6 py-10"
    >

      <View className="flex-1">
        {/* Main container */}
        <View className="flex-1 justify-center items-center px-8">

          {/* Illustration container */}
          <View className="mb-16 items-center flex-1 ">
            <IsometricIllustration />
            {/* Welcome text */}
            {/* Text */}
            <View className="mb-10">
              <Text style={{fontSize:HP("4%")}} className="text-2xl font-bold text-center text-white mb-3">
                Welcome to Go Task
              </Text>
              <Text className="text-base text-white text-center">
                A workspace to over 10 Million influencers{"\n"}
                around the global of the world.
              </Text>
            </View>
          </View>



          {/* Action button */}
          {/* Button */}
          <Pressable
            onPress={() => router.push("/(tabs)/main")}
            className="bg-white  w-full py-4 rounded-2xl mb-5"
          >
            <Text className="text-gray-700 text-lg font-semibold text-center">
              Let's Start
            </Text>
          </Pressable>
        </View>
      </View>

    </NewLinearGradient>
  );
};

export default GoTaskWelcomeScreen;