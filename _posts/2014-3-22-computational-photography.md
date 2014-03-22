---
layout: post
title: Computational Photography

tags: [笔记]

comments: true

share: true

---

# Computational Photography

Eureka 2014.3

## Overview

Computational photography is an new emerging multidisciplinary field, aiming to overcome the limitations of traditional digital imaging for the benefit of photographers, cision and graphic researchers, as well as image processing programmers.

## Elements of computational imaging systems(Sampling and reconstruction mechanisms)

### Sampling 

in the samping stage, light emitted from light sources is transported thruogh a series of optical elements and integrated at the image sensor.

There are several ways to perform computational sampling

- Computational optics: capturing optically coded images, coded apperture or shutter, for example.
- Computational sensors: attempts to design or modify the detectors in some way to obtain task-specific imaging results.
- Computational illumination:
	
	- the design of coded lighting patterns
	- collection of images under different spectra by using multiple light sources
	- capture of multi-flash images
	
	 

### Reconstruction

Similar to other general signal processing tasks, the formation of reconstructed images involves both spatial and frequency domains.

two main approaches

- model the light ray transport in spatial domain
- study light field in the Fourier domain

## New properties owing to CP

- Field of view: The field of view can be extended by modifying or adding camera elements or stitching images from different viewpoints.
- Dynamic Range: 
	- stitching of multiple images at different exposures settings(very basic, widely applied)
	- Performing post processing by introducing varous filters
	- Modifying the sensor reponses
	- Designing new sensors ( improving the hardware )

- Depth of field
	- Introduction of motion to sensors
	- coded exposure 
- Wavelength resolution
- Spatial resolution
- Temporal resolution
- $$$ \dots $$$



## Light field theory

The introduction of light field theory is for one purpose , to extend the low dimensional 2D subspace to a higher lievel, and acquire and display the visual information in more effective ways.
￼
plenoptic function $$$P(\theta, \phi, \lambda,t, V_x, V_y, V_z) $$$ :

$$$ P (\theta, \phi)$$$ the spherical coordinates, $$$ V_x, V_y, V_z $$$ the viewing position, $$$ \lambda $$$ wavelength, $$$ t $$$ the time dimension.

adopted prototypes of plenoptic cameras:

- sequential shots
- simutaneous shots
- multiplexing capturing


# References

[1]Suo J L, Ji X Y, Dai Q H. An overview of computational photography[J]. Science China Information Sciences, 2012, 55(6): 1229-1248.