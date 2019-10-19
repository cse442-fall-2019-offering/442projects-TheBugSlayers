import React, {
    Component,
} from 'react';
import {
    AppRegistry
} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';

var items = [{
        id: 1,
        name: 'Main/ Bailey Lot',
    },
    {
        id: 2,
        name: 'Goodyear Hall',
    },
    {
        id: 3,
        name: 'Main Circle',
    },
    {
        id: 4,
        name: 'Parker Lot',
    },
    {
        id: 5,
        name: 'RPCI',
    },
    {
        id: 6,
        name: 'Buffalo General',
    },
    {
        id: 7,
        name: 'Center of Excellence',
    },
    {
        id: 8,
        name: 'EOC / Gateway',
    },
    {
        id: 9,
        name: 'CRTC',
    },
    {
        id: 10,
        name: 'JSMBMS',
    },
    {
        id: 11,
        name: 'CFT Lot',
    },
    {
        id: 12,
        name: 'Crofts',
    },
    {
        id: 13,
        name: 'Flint Loop',
    },
    {
        id: 13,
        name: 'Flint Village East',
    },
    {
        id: 14,
        name: 'Creekside Village',
    },
    {
        id: 15,
        name: 'Moody Terrace(Ellicott)',
    },
    {
        id: 16,
        name: 'South Lake Village(to Spine)',
    },
    {
        id: 17,
        name: 'Alumni/ Stadium',
    },
    {
        id: 18,
        name: 'Center For The Arts',
    },
    {
        id: 19,
        name: 'Lockwood',
    },
    {
        id: 20,
        name: "Founder's/O'Brian",
    },
    {
        id: 21,
        name: 'Cooke / Hochstetter',
    },
    {
        id: 22,
        name: 'Natural Sciences Complex',
    },
    {
        id: 23,
        name: 'Flickinger Court',
    },
    {
        id: 24,
        name: 'Hadley Village',
    },
    {
        id: 25,
        name: 'Computing Center',
    },
    {
        id: 26,
        name: 'Lower Capen',
    },
    {
        id: 27,
        name: 'Grenier',
    },
];

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: {}
        }
    }
    getSelectedlocation = ()=>{
        var selectedlocation = this.state.selectedItem.name;

        }
    render() {
        return ( 
            <SearchableDropdown onItemSelect = {
                (item) => {
                    this.setState({
                        selectedItem: item
                        
                    },
                    this.props.getCurrentLocation(item.name),
                    );
                    
                }
                
            }
            containerStyle = {
                {
                    padding: 12
                }
            }
            onRemoveItem = {
                (item, index) => {
                    const items = this.state.selectedItem.filter((sitem) => sitem.id !== item.id);
                    this.setState({
                        selectedItem: {}
                    });
                }
            }
            itemStyle = {
                {
                    padding: 10,
                    marginTop: 2,
                    backgroundColor: '#8eb1d6',
                    borderColor: '#bbb',
                    borderWidth: 1,
                    borderRadius: 5,
                }
            }
            itemTextStyle = {
                {
                    color: '#222'
                }
            }
            itemsContainerStyle = {
                {
                    maxHeight: 140
                }
            }
            items = {
                items
            }
            defaultIndex = {
                2
            }
            resetValue = {
                false
            }
            textInputProps = {
                {
                    placeholder: "Enter your Location",
                    underlineColorAndroid: "transparent",
                    style: {
                        padding: 12,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 5,
                    },
                }
            }
            listProps = {
                {
                    nestedScrollEnabled: true,
                }
            }
            /> 
        );
    }
}
AppRegistry.registerComponent('Dropdown', () => Dropdown);