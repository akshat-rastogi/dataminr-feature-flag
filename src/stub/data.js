const MOCK_DATA = [
    {
        "title": "General",
        "size": "12",
        "components": {
            "type": "individual",
            "fields": [
                {
                    "id": "General.CaseManagement",
                    "name": "Case Management",
                    "type": "switch",
                    "disabled": false,
                    "defaultValue": true
                },
                {
                    "id": "General.MapTimeLine",
                    "name": "Map Timeline",
                    "type": "switch",
                    "disabled": false,
                    "defaultValue": true
                },
                {
                    "id": "General.ViewBriefing",
                    "name": "Views & Briefings",
                    "type": "switch",
                    "disabled": false,
                    "defaultValue": true
                },
                {
                    "id": "General.Notifications",
                    "name": "Notifications",
                    "type": "switch",
                    "disabled": false,
                    "defaultValue": true
            
                },
                {
                    "id": "General.MassCommunication",
                    "name": "Mass Communication",
                    "type": "switch",
                    "disabled": false,
                    "defaultValue": true
                },
                {
                "id": "General.TrafficCamera",
                "name": "Traffic Camera",
                "type": "switch",
                "disabled": false,
                "defaultValue": true
                }
            ]
        }
    },
    {
        "title": "Settings",
        "size": "4",
        "components": {
            "type": "toggle-group",
            "fields": [
                {
                    "id": "Settings.AuditLog",
                    "name": "Audit Log",
                    "type": "switch",
                    "disabled": false,
                    "defaultValue": true
                }, 
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
                            {
                                "id": "Settings.Users.UsersAdd",
                                "name": "Users Add",
                                "type": "switch",
                                "disabled": false,
                                "defaultValue": true
                            },
                            {
                                "id": "Settings.Users.UsersDelete",
                                "name": "Users Delete",
                                "type": "switch",
                                "disabled": false,
                                "defaultValue": true
                            },
                            {
                                "id": "Settings.Users.UsersEdit",
                                "name": "Users Edit",
                                "type": "switch",
                                "disabled": false,
                                "defaultValue": true
                            },
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
                        ]
                    }
                }
            ]
        }
    },
    {
        "title": "Alerts",
        "size": "4",
        "components": {
            "type": "group",
            "fields": [
                {
                    "id": "Alerts.AlertManager",
                    "name": "Alert Manager",
                    "type": "switch",
                    "disabled": false,
                    "defaultValue": true
                },
                {
                    "id": "Alerts.AlertRules",
                    "name": "Alert Rules",
                    "type": "switch",
                    "disabled": false,
                    "defaultValue": true,
                    "hasDropdown": true,
                    "dropdown": {
                        "id": "Alerts.AlertRules.Dropdown",
                        "defaultValue": 0,
                        "disabled": false,
                        "minValue": 0,
                        "maxValue": 10
                    }
                }
            ]
        }
    }
]

export { MOCK_DATA } 