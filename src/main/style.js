import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#8b10ae',
    justifyContent: 'center',
  },
  Content: {
    flex: 1,
    maxHeight: 400,
    zIndex: 5,
  },
  Card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginVertical: 0,
    marginHorizontal: 20,
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 380,
  },
  CardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
  },
  CardContent: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  CardFooter: {
    padding: 30,
    backgroundColor: '#eee',
    borderRadius: 4,
  },
  Title: {
    fontSize: 13,
    color: '#999',
  },
  Description: {
    fontSize: 32,
    marginTop: 3,
    color: '#333',
  },
  Annotation: {
    fontSize: 12,
    color: '#333',
  },
});
