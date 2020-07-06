import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
export function DefaultSkeleton() {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        borderColor="#f3f3f3"
        borderWidth={1}
        borderRadius={5}
        flexDirection="row"
        padding={10}
        backgroundColor="#fff"
        marginBottom={10}
        alignItems="center">
        <SkeletonPlaceholder.Item width={40} height={40} borderRadius={50} />
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item width={180} height={15} borderRadius={4} />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width={80}
            height={15}
            borderRadius={4}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item
        borderColor="#f3f3f3"
        borderWidth={1}
        borderRadius={5}
        flexDirection="row"
        padding={10}
        backgroundColor="#fff"
        marginBottom={10}
        alignItems="center">
        <SkeletonPlaceholder.Item width={40} height={40} borderRadius={50} />
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item width={180} height={15} borderRadius={4} />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width={80}
            height={15}
            borderRadius={4}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item
        borderColor="#f3f3f3"
        borderWidth={1}
        borderRadius={5}
        flexDirection="row"
        padding={10}
        backgroundColor="#fff"
        marginBottom={10}
        alignItems="center">
        <SkeletonPlaceholder.Item width={40} height={40} borderRadius={50} />
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item width={180} height={15} borderRadius={4} />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width={80}
            height={15}
            borderRadius={4}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item
        borderColor="#f3f3f3"
        borderWidth={1}
        borderRadius={5}
        flexDirection="row"
        padding={10}
        backgroundColor="#fff"
        marginBottom={10}
        alignItems="center">
        <SkeletonPlaceholder.Item width={40} height={40} borderRadius={50} />
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item width={180} height={15} borderRadius={4} />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width={80}
            height={15}
            borderRadius={4}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item
        borderColor="#f3f3f3"
        borderWidth={1}
        borderRadius={5}
        flexDirection="row"
        padding={10}
        backgroundColor="#fff"
        marginBottom={10}
        alignItems="center">
        <SkeletonPlaceholder.Item width={40} height={40} borderRadius={50} />
        <SkeletonPlaceholder.Item marginLeft={20}>
          <SkeletonPlaceholder.Item width={180} height={15} borderRadius={4} />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width={80}
            height={15}
            borderRadius={4}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}

export const Loader = () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <ActivityIndicator size={40} color="red" />
  </View>
)

export function IlanSkeleton() {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        flexDirection="row"
        alignItems="center"
        padding={10}>
        <SkeletonPlaceholder.Item
          width={40}
          height={15}
          borderRadius={40}></SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width={40}
          height={40}
          marginLeft={10}
          borderRadius={40}></SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item marginLeft={10}>
          <SkeletonPlaceholder.Item
            width={120}
            borderRadius={4}
            height={20}
            marginBottom={10}></SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            width={60}
            height={15}
            borderRadius={4}></SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item
        overflow="hidden"
        flexDirection="column"
        padding={10}>
        <SkeletonPlaceholder.Item
          width={190}
          marginBottom={5}
          borderRadius={4}
          height={20}></SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width={80}
          marginBottom={30}
          height={10}
          borderRadius={4}></SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width="100%"
          borderRadius={5}
          marginBottom={5}
          height={20}></SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width="100%"
          borderRadius={5}
          marginBottom={5}
          height={20}></SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width="100%"
          borderRadius={5}
          marginBottom={5}
          height={20}></SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width="100%"
          borderRadius={5}
          marginBottom={5}
          height={20}></SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width="100%"
          borderRadius={5}
          marginBottom={5}
          height={20}></SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width="100%"
          borderRadius={5}
          marginBottom={25}
          height={20}></SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width={160}
          borderRadius={5}
          marginBottom={25}
          height={20}></SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width="100%"
          borderRadius={5}
          marginBottom={5}
          height={20}></SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width="100%"
          borderRadius={5}
          marginBottom={5}
          height={20}></SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width="100%"
          borderRadius={5}
          marginBottom={5}
          height={20}></SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width="100%"
          borderRadius={5}
          marginBottom={25}
          height={20}></SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width={160}
          borderRadius={5}
          marginBottom={25}
          height={20}></SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width="100%"
          borderRadius={5}
          marginBottom={5}
          height={20}></SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width="100%"
          borderRadius={5}
          marginBottom={5}
          height={20}></SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width="100%"
          borderRadius={5}
          marginBottom={5}
          height={20}></SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          width="100%"
          borderRadius={5}
          marginBottom={5}
          height={20}></SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}
