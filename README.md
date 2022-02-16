# feature-flag


## Demo

![dataminr-flag-feature](https://user-images.githubusercontent.com/17953359/150456434-c37ea9f8-4fc7-4221-add0-4ac414b99d45.gif)


## JSON Schema 

### Sample Section-wise Schema

```
{
        "title": "General",
        "size": "12",
        "components": {
            "type": "individual",
            "fields": [
              <array of toggles>
              ...
           ]
         }
},
{
      ...
}
```

#### Types of Toggle Groups
The feature flags has been categoried in three sections to showcase the different types:

<table>
  <tr>
    <th>individual</th>
    <td>This property defines if the toggles are shown individually.</td>
  </tr>

  <tr>
    <th>toggle-group</th>
    <td>This property can be used to group toggles with the padding.</td>
  </tr>


  <tr>
    <th>group</th>
    <td>This property can be used to group toggles without the padding.</td>
  </tr>
</table>

### Sample Toggle Field Schema 

```
{
    "id": "Settings.AuditLog",
    "name": "Audit Log",
    "type": "switch",
    "disabled": false,
    "defaultValue": true
}
```  

### Additional Props

The schema also supports having children and dropdowns as other elements alongwith toggle fields.

- For adding children add the following keys in the field json:
```
{
    "id": "Settings.Users",
    "name": "Users",
    "type": "switch",
    "disabled": false,
    "defaultValue": true,
    "hasChildren": true,
    "children": {
        "type": "group",
        "fields": [
            ...
            {
                "id": "Settings.Users.UsersAdd",
                "name": "Users Add",
                "type": "switch",
                "disabled": false,
                "defaultValue": true
            },
            ...
        ]
    }
}

```

- For adding dropdown add the following keys in the field json:
```
{
    "id": "Settings.Users.MaxUsers",
    "name": "Max Users",
    "type": "switch",
    "disabled": false,
    "defaultValue": true,
    "hasDropdown": true,
    "dropdown": {
        "id": "Alerts.AlertRules.Dropdown",
        "defaultValue": 0,
        "disabled": true,
        "minValue": 0,
        "maxValue": 10
    }
}
```

## Testing

Jest and Enzyme has been configured to be used in the application. For representational purposes, a testing file has been written for src/components/organism/InputGroup. 
