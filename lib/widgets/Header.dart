import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:flutter_tabler_icons/flutter_tabler_icons.dart';
import 'package:lablogfrontend/Content/InterLangTexts.dart';
import 'package:lablogfrontend/components/colors/colors.dart';
import 'package:lablogfrontend/components/logo.dart';

class Header extends StatelessWidget {
  final GlobalKey<ScaffoldState> scaffoldKey;
  List<String>? buttonNames =
      textHolder["Nome dos Butão"]?.eng!.text.split("/");
  List<String>? nomeBotoes = textHolder["Nome dos Butão"]?.ptBr.text.split("/");

  Header({super.key, required this.scaffoldKey});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: double.infinity,
      color: AppColors.lightblue,
      child: SizedBox(
        width: double.infinity,
        height: 200.h,
        child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Container(
                child: logo(400.h),
              ),
              Container(
                width: 1000.w,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    Container(
                      height: 55.h,
                      width: 250.w,
                      decoration: BoxDecoration(
                          color: Colors.transparent,
                          border:
                              Border.all(color: AppColors.black, width: 0.6)),
                      child: TextButton(
                          onPressed: () {}, child: Text(nomeBotoes![0])),
                    ),
                    Container(
                      height: 55.h,
                      width: 250.w,
                      decoration: BoxDecoration(
                          color: Colors.transparent,
                          border:
                              Border.all(color: AppColors.black, width: 0.6)),
                      child: TextButton(
                          onPressed: () {}, child: Text(nomeBotoes![1])),
                    ),
                    Container(
                      height: 55.h,
                      width: 250.w,
                      decoration: BoxDecoration(
                          color: Colors.transparent,
                          border:
                              Border.all(color: AppColors.black, width: 0.6)),
                      child: TextButton(
                          onPressed: () {}, child: Text(nomeBotoes![2])),
                    )
                  ],
                ),
              )
            ]),
      ),
    );
  }
}
