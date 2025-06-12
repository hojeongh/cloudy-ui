import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Sparkles, BedDouble, Repeat, User } from "lucide-react";

export default function CloudyApp() {
  return (
    <div className="w-full min-h-screen bg-[#F9F9F9] text-gray-800 font-sans">
      {/* Header */}
      <header className="p-6 text-center text-2xl font-semibold">
        🌤 Cloudy — 이불은 사지 말고, 구독하세요
      </header>

      {/* Main UI */}
      <Tabs defaultValue="home" className="w-full max-w-md mx-auto">
        <TabsList className="grid grid-cols-4 gap-2 bg-white p-2 rounded-2xl shadow">
          <TabsTrigger value="home" className="flex flex-col items-center text-xs">
            <Sparkles className="text-xl" /> 홈
          </TabsTrigger>
          <TabsTrigger value="recommend" className="flex flex-col items-center text-xs">
            <BedDouble className="text-xl" /> 스타일 추천
          </TabsTrigger>
          <TabsTrigger value="manage" className="flex flex-col items-center text-xs">
            <Repeat className="text-xl" /> 교체 관리
          </TabsTrigger>
          <TabsTrigger value="myroom" className="flex flex-col items-center text-xs">
            <User className="text-xl" /> 내 공간
          </TabsTrigger>
        </TabsList>

        {/* Home Tab Content */}
        <TabsContent value="home">
          <Card className="mt-6">
            <CardContent className="p-4 space-y-2">
              <img
                src="https://placehold.co/400x300/DDEAF6/777?text=오늘의+침구+추천"
                alt="오늘의 추천 침구"
                className="rounded-2xl"
              />
              <p className="text-sm font-medium">📦 최근 배송: 부드러운 라벤더 침구</p>
              <Button variant="outline" className="w-full">내 후기 보기</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Recommend Tab Content */}
        <TabsContent value="recommend">
          <Card className="mt-6">
            <CardContent className="p-4 space-y-3">
              <p className="text-sm">🎨 스타일 추천 퀴즈에 참여해보세요</p>
              <Button className="w-full">나의 침실 스타일 찾기</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Manage Tab Content */}
        <TabsContent value="manage">
          <Card className="mt-6">
            <CardContent className="p-4 space-y-3">
              <p className="text-sm">⏱ 다음 교체일: 7월 5일</p>
              <Button variant="outline" className="w-full">교체 주기 변경하기</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* My Room Tab Content */}
        <TabsContent value="myroom">
          <Card className="mt-6">
            <CardContent className="p-4 space-y-3">
              <p className="text-sm">🛏️ 사용한 침구 히스토리 보기</p>
              <Button className="w-full">내 스타일 분석</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
