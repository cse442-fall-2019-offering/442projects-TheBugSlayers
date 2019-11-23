import React, {
    Component,
} from 'react';
import {
    AppRegistry
} from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';

var items = [{
        id: 1,
        name: 'Main/Bailey Lot',
        line:'Blue',
    },
    {
        id: 2,
        name: 'Goodyear Hall',
        line:'Blue',
    },
    {
        id: 3,
        name: 'Main Circle',
        line:'Blue',
    },
    {
        id: 4,
        name: 'Parker Lot',
        line:'Blue',
    },
    {
        id: 5,
        name: 'RPCI',
        line:'Blue',
    },
    {
        id: 6,
        name: 'Buffalo General',
        line:'Blue',
    },
    {
        id: 7,
        name: 'Center of Excellence',
        line:'Blue',
    },
    {
        id: 8,
        name: 'EOC/Gateway',
        line:'Blue',
    },
    {
        id: 9,
        name: 'CTRC',
        line:'Blue',
    },
    {
        id: 10,
        name: 'JSMBMS',
        line:'Blue',
    },
    {
        id: 11,
        name: 'CFT Lot',
        line:'Green',
    },
    {
        id: 12,
        name: 'Crofts',
        line:'Green',

    },
    {
        id: 13,
        name: 'Flint Loop',
        line:'Green',
    },
    {
        id: 13,
        name: 'Flint Village East',
        line:'Green',
    },
    {
        id: 14,
        name: 'Creekside Village',
        line:'North',
    },
    {
        id: 15,
        name: 'Moody Terrace (Ellicott)',
        line:'North',
    },
    {
        id: 16,
        name: 'South Lake Village (to Spine)',
        line:'North',
    },
    {
        id: 17,
        name: 'Alumni/Stadium',
        line:'North',
    },
    {
        id: 18,
        name: 'Center For The Arts',
        line:'North',
    },
    {
        id: 19,
        name: 'Lockwood',
        line:'North',
    },
    {
        id: 20,
        name: "Founder's/O'Brian",
        line:'North',
    },
    {
        id: 21,
        name: 'Cooke/Hochstetter',
        line:'North',
    },
    {
        id: 22,
        name: 'Natural Sciences Complex',
        line:'North',
    },
    {
        id: 23,
        name: 'Flickinger Court',
        line:'North',
    },
    {
        id: 24,
        name: 'Hadley Village',
        line:'North',
    },
    {
        id: 25,
        name: 'Computing Center',
        line:'North',
    },
    {
        id: 26,
        name: 'Lower Capen',
        line:'North',
    },
    {
        id: 27,
        name: 'Greiner Hall',
        line:'North',
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
    getSelectedLine = ()=>{
        var selectedLine = this.state.selectedItem.line;
        }    
    render() {
        return ( 
            <SearchableDropdown onItemSelect = {
                (item) => {
                    this.setState({
                        selectedItem: item
                        
                    },
                    this.props.getCurrentLocation(item.name), //returns location to the prop
                    this.props.getCurrentLine(item.line), // returns shuttle line associated with the location selected
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
                    backgroundColor: '#005bbb',
                    borderColor: '#bbb',
                    borderWidth: 1,
                    borderRadius: 5,
                }
            }
            itemTextStyle = {
                {
                    color: '#fff'
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