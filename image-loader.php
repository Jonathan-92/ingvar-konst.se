<?php
	$dir = "images/";	
	$result = array();
	
	$image_files = scandir($dir);
	
	// $n is 2 to skip the "\." and "\.." items in the directory,
	// and we go through the length of $image_files - 1 to omit "\Thumbs.db"
	for ($n = 2; $n < count($image_files) - 1; ++$n) {
		$image_path = $dir . $image_files[$n];
		$image_properties = getimagesize($image_path);
		$result[$image_path] = array("width" => $image_properties[0], 
				"height" => $image_properties[1]);
	}

	$json_result = json_encode($result);
	
	echo($json_result);
?>