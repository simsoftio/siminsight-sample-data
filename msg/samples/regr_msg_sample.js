[{
    "msgId": "01301c62-e75f-46bc-97d5-a0f1780c844f",
    "version": "0.1",
    "msgType": "regression",
    "msgMetadata": {
        "createTime": 1700886833000,
        "client": "python",
        "checksum": "4700b0c7104da316d34357f17d0fb05989e35d0a8ab0495ecf813b36a009a6f8",
        "queue": {
            "name": "default",
            "enqueue_ts": 1700886833000,
            "dequeue_ts": 1700886833003
        }
    },
    "msgData": {
        "action": "start",
        "id": "regr_1702709145496_45",
        "name": "regr_ac365a06",
        "cmd": "Master start end master.",
        "component": "firewire_comp1",
        "config": "raise",
        "dir": "/trial/meet/investment/sing/region/yourself/rule/regr_ac365a06",
        "host": "host48",
        "seed": 6909084958,
        "branch": {
            "name": "chore/w-68405",
            "version": "e4a8f0c8-bc35-4b19-bf1d-6e68c32c723b",
            "update_ts": 1702709145496
        },
        "time_ms": 1700886833000,
        "jobId": "de009a8f",
        "jobs": {
            "build": [
                "build_5f8221f1",
                "build_2f29034e"
            ],
            "test": [
                34,
                33
            ],
            "coverage": [
                0,
                1
            ]
        },
        "planned_jobs": {
            "build": [
                "build_5f8221f1",
                "build_2f29034e"
            ],
            "test": [
                34,
                33
            ],
            "coverage": [
                0,
                1
            ]
        },
        "resources": {
            "machine": {
                "name": "Machine7",
                "os": "mac",
                "env_vars": "base+d(PROJECT_PATH=/home/scratch, PROJECT_GROUP=ABCD, PROJECT_PRIORITY=HIGH)+D(SIMTOOL=VCS1.1)+HoneyDew(1.1)",
                "user_groups": [
                    "Hardware"
                ],
                "task_id": 1421,
                "submitted_by_host": "Machine41",
                "cpu_cores": 256,
                "ram_req_gb": 32,
                "ram_usage_gb": 1,
                "disk_usage_mb": 947,
                "swap_mem_usage_gb": 375,
                "licenses": [
                    "vcs12",
                    "vcs10"
                ]
            },
            "licenses": []
        },
        "project": "Axiom_proj4",
        "org": "Design_org2",
        "user": "german.garcia",
        "customer": "ExoSemis_cust0",
        "result": {
            "status": "pass",
            "msg": ""
        },
        "metadata": {}
    }
},
{
    "msgId": "4eec6e25-b6c0-4f82-b1c8-6232e99e07b2",
    "version": "0.1",
    "msgType": "regression",
    "msgMetadata": {
        "createTime": 1700888348001,
        "client": "python",
        "checksum": "4700b0c7104da316d34357f17d0fb05989e35d0a8ab0495ecf813b36a009a6f8",
        "queue": {
            "name": "default",
            "enqueue_ts": 1700888348001,
            "dequeue_ts": 1700888348005
        }
    },
    "msgData": {
        "action": "end",
        "id": "regr_1702709145496_45",
        "name": "regr_ac365a06",
        "cmd": "Master start end master.",
        "component": "firewire_comp1",
        "config": "raise",
        "dir": "/trial/meet/investment/sing/region/yourself/rule/regr_ac365a06",
        "host": "host48",
        "seed": 6909084958,
        "branch": {
            "name": "chore/w-68405",
            "version": "e4a8f0c8-bc35-4b19-bf1d-6e68c32c723b",
            "update_ts": 1702709145496
        },
        "time_ms": 1700888348001,
        "jobId": "de009a8f",
        "jobs": {
            "build": [
                "build_5f8221f1",
                "build_2f29034e"
            ],
            "test": [
                34,
                33
            ],
            "coverage": [
                0,
                1
            ]
        },
        "planned_jobs": {
            "build": [
                "build_5f8221f1",
                "build_2f29034e"
            ],
            "test": [
                34,
                33
            ],
            "coverage": [
                0,
                1
            ]
        },
        "resources": {
            "machine": {
                "name": "Machine10",
                "os": "mac",
                "env_vars": "base+d(PROJECT_PATH=/home/scratch, PROJECT_GROUP=ABCD, PROJECT_PRIORITY=HIGH)+D(SIMTOOL=VCS1.1)+HoneyDew(1.1)",
                "user_groups": [
                    "insight",
                    "fpga"
                ],
                "task_id": 1234,
                "submitted_by_host": "Machine1995",
                "cpu_cores": 512,
                "ram_req_gb": 1024,
                "ram_usage_gb": 256,
                "disk_usage_mb": 1453,
                "swap_mem_usage_gb": 1778,
                "licenses": [
                    "vcs9",
                    "vcs6",
                    "vcs9",
                    "vcs2"
                ]
            },
            "licenses": []
        },
        "project": "Axiom_proj4",
        "org": "Design_org2",
        "user": "german.garcia",
        "customer": "ExoSemis_cust0",
        "result": {
            "status": "fail",
            "msg": "Test Failure"
        },
        "metadata": {}
    }
}]