# gyume2021.github.io

In `team-counter`, you can select hero and team to find corresponding counter team.

1. you have to prepare `herowars-log.csv`, `0001.png` is the image name. `40.63.16.55.7` are hero numbers. You can find hero number in the folder `avatars`.

**herowars-log.csv**
```cs
name,hero
0001,40.63.16.55.7
0002,7.9.16.40.63
0003,7.9.40.4.56
0004,7.9.40.61.42
0005,7.28.48.58.63
0006,7.9.40.56.58
0007,7.13.16.40.64
0008,9.42.46.40.56
0009,40.42.48.25.57
0010,16.25.42.48.57
0011,7.9.40.61.63
0012,28.48.55.58.63
0013,7.9.40.42.61
```

2. You have to put hero image in folder `avatars`, *enemy team image* in folder `descriptive`, and the battle log image in `statistics`.  

3. Run `data-processing.py` and it will process `herowars-log.csv` and save the result as `invert_index.json` 

**invert_index.json**
```json
{
    "avatars": {
        "1": [],
        "10": [],
        "11": [],
        "12": [],
        "13": [
            "0007.png"
        ],
        "14": [],
        "15": [],
        "16": [
            "0001.png",
            "0002.png",
            "0007.png"
        ]
    },
    "descriptive": {
        "0001.png": "0001-log.png",
        "0002.png": "0002-log.png",
        "0003.png": "0003-log.png"
    }
}

```