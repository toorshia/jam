# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)

# Load the sencha-touch framework automatically.
# load File.join(dir, '..', '..', 'sdk-2.1.1', 'resources', 'themes')
load File.join(dir, '..', '..', 'touch', 'resources', 'themes')

# Compass configurations
sass_path = dir
css_path = File.join(dir, '..', 'css')

# Custom Ruby functions
require File.join(dir, 'custom_extensions.rb')

# Require any additional compass plugins here.
images_dir = File.join(dir, '..', 'images')
output_style = :compressed
environment = :production
