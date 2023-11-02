import 'package:flutter/material.dart';
import 'package:lablogfrontend/constvalues.dart';

class Header extends StatelessWidget {
  Header({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: double.infinity,
      color: lightblue,
      child: SingleChildScrollView(
        child: Container(
          width: double.infinity,
          height: 500,
          child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Padding(
                    padding: EdgeInsets.symmetric(vertical: 5),
                    child: Container(
                      width: 100,
                      child: Image.asset(
                        'src/images/LABlog_Letter_Cropped.png',
                      ),
                    )),
                SizedBox(
                  height: 100,
                ),
                Text('Procurando Segredos ?'),
                SizedBox(
                  height: 100,
                ),
                Text('Ou só Bugs ?')
              ]),
        ),
      ),
    );
  }
}
