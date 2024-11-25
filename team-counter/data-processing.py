import csv
import json
import os

image_hero_dict = {"avatars":{}, "descriptive":{}}

def count_files_in_folder(folder_path):
    try:
        # List all entries in the directory
        all_entries = os.listdir(folder_path)
        # Filter only files (ignore directories)
        files = [entry for entry in all_entries if os.path.isfile(os.path.join(folder_path, entry))]
        return files
    except FileNotFoundError:
        print(f"Folder not found: {folder_path}")
        return 0

folder_path = "avatars"
file_name = count_files_in_folder(folder_path)
print(f"Number of files in folder: {file_name}")
# initialize the inverted index table
for i in file_name:   
    image_hero_dict["avatars"][i.split(".")[0]] = []

# Read and process the CSV file
with open('herowars-log.csv', mode='r') as file:
    reader = csv.DictReader(file)

    for row in reader:
        print (row["name"], row["hero"].split("."))
        for i in row["hero"].split("."):
            image_hero_dict["avatars"][i].extend([row["name"].zfill(4)+".png"])

        image_hero_dict["descriptive"][row["name"].zfill(4)+".png"] =  row["name"].zfill(4)+"-log.png"
        
    # Save the dictionary to a JSON file
    with open("invert_index.json", "w") as file:
        json.dump(image_hero_dict, file, indent=4)  

# with open("invert_index.json", "r") as file:
#     loaded_dict = json.load(file)
# print(loaded_dict)
