import os
from PIL import Image

# Ensure the output directory exists
os.makedirs("src/assets/images/team", exist_ok=True)

# Load the source image
source_image = Image.open("images/Our-Team.png")

# Define the coordinates for each profile image (left, top, right, bottom)
# These are approximate values based on the reference image
profiles = {
    "mostafa-rezaee.jpg": (130, 306, 310, 486),
    "robert-green.jpg": (510, 306, 690, 486),
    "andrew-gregory.jpg": (865, 306, 1045, 486),
    "hamid-shojaei.jpg": (1220, 306, 1400, 486)
}

# Extract and save each profile image
for filename, coords in profiles.items():
    profile = source_image.crop(coords)
    
    # Resize to 300x300
    profile = profile.resize((300, 300), Image.LANCZOS)
    
    # Save the image
    output_path = os.path.join("src/assets/images/team", filename)
    profile.save(output_path, quality=90, optimize=True)
    
    print(f"Extracted and saved: {output_path}")

print("All profile images have been extracted and saved.") 