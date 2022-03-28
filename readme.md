* [Port Settings](#Port)
* [Validation](#Validation)
* [Available Scripts](#Scripts)
* [Available Endpoints](#Endpoints)
* [Available Images](#Images)
* [Conclusion](#Conclusion)
* [Review1](#Review1)
     
## Port

I used port 10001, no technical reason, just emotional one, it was the first port I used in a hardware project 14 years ago

## Validation

While building this project I searched for different ideas of validation. I found some ideas ready online but since the purpose of this project is to learn and practice so I decided to build my validation library myself.

To validate a number (width or height) I put the following 4 rules:
1) Number must exist
2) It should be a number
3) It should be greater than or equal 50
4) It should be less than or equal to 1200

To validate the image name, I had a simple rule:
1) Image name should match one of the available images

putting blank / number / etc. in this field will break this simple rule and thus return error

Errors are marked in nice HTML formate so it is rendered in a nice way

## Scripts

npm run build  --> Build the project
npm run test   --> Test the project
npm run lint   --> Apply Linting to the project
npm run watch  --> Start the project and monitor any modification (Dev Mode)
npm run start  --> Start the project (Production Mode)

## Endpoints

http://localhost:10001/api/
This is just a fun endpoint, it prints "This is the resize API," and the next line is the visit number, each refresh the visit number increases


http://localhost:10001/api/resize?name=image1&width=1000a&height=600
This is the resize endpoint you can write and image dimensions (100 ~ 1200) and an existed jpg image.
Any mistake will lead the API to respond with proper HTML to describe the error
you can try some of the following tests, all will give an error message:

http://localhost:10001/api/resize

http://localhost:10001/api/resize?name=notExisted&width=1000a&height=600

http://localhost:10001/api/resize?name=notExisted&width=1000a&height=6000

http://localhost:10001/api/resize?name=notExisted&width=10000a&height=600

## Images

The following images are available:
image1
image2
image3
image4
image5
these are the five images provided by UDACITY after renaming them for ease of use

## Conclusion

I have no previous experience in Node JS except what I learned before in the professional track of this scholarship also I never wrote code in TypeScript before the beginning of this course, the project was very challenging to me, I did a lot of effort to complete it, but I gained a lot from it, I've bookmarked a lot of topics to study after the course. so, thank you UDACITY for making this happens.

## Review1

I got 4 Negative comments that are:

1_ supertest, jasmine, @types packages and jasmine-spec-reporter must be a part of devDependencies
Solved, Thanks for teaching me this point that I didn’t notice

2_ Scripts are present for required functionalities except prettier script
prettier script added but it is not working well in my machine I don’t know why or in what direction should I got to fix this error so please guide me how to solve the error or that it works in your machine and maybe I have issue with my installed package or windows OS.

3_ Functions do not have typed parameters or return type
Yes, it is my mistake, I’m sorry for it and I fixed it, also thanks for the tips given it was so helpful

4_ Lint script works perfectly without producing errors. Prettier script is missing.
Yes, that is why I removed it to avoid errors, so I think that this note is related to note number 2.

I got also many Positive comments, it really encouraged me, thank you.
