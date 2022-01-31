import {  StyleSheet,  } from 'react-native';

import { Searchbar } from 'react-native-paper';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
    selectedTextStyle={styles.selectedTextStyle}
    searchPlaceholder="Search..."
    
          value={query}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
    />
  );
  }
  const styles =StyleSheet.create({
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  })

;



export default MyComponent;